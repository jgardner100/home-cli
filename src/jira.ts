import * as _ from 'lodash';
import JiraApi from 'jira-client';
import commander from 'commander';
import moment from 'moment-timezone';
import os from 'os';
import log from 'loglevel';

import {sleep} from './helpers';

const CLOUD_SPRINT_ID = '3270'; // Cloud-Selected for Development
const REVIEWER = 'john.gardner@thetradedesk.com'; // Sorry, you get everything assigned to you.

export const Api = new JiraApi({
  protocol: 'https',
  host: 'atlassian.thetradedesk.com',
  base: 'jira',
  username: process.env.JIRA_USERNAME,
  password: process.env.JIRA_PASSWORD,
  apiVersion: '2',
  strictSSL: true,
});

export function commands() {
  const cmd = new commander.Command('ticket').description(`Commands relating to Jira tickets for the CLOUD project`);
  cmd
    .command('new')
    .description(`Create a new ticket, add it to the CLOUD Kanban and optionally transition it to "In Progress"`)
    .argument('<title>', `Title of the new ticket`)
    .argument('[description]', `Long description for the ticket. Set to "-" to read the description from stdin.`)
    .option('-r, --in-progress', `Move the ticket to the "In Progress" state`)
    .option('-t, --type <type>', `Type of the ticket`, 'Code Task')
    .option('-l, --label <label>', `Add a Jira label to the ticket (may be specified multiple times)`, (value, previous) => previous.concat([value]), [])
    .option('-a, --assign <label>', `Assign the ticket to a specific user`, `${process.env.USER || os.userInfo().username}@thetradedesk.com`)
    .option('-p, --points <points>', `Set the story points`, value => Number(value), 1)
    .action(async (summary, description, options) => {
      if (description === '-') {
        log.info(`Reading the ticket description from stdin. Enter Ctrl-D to complete the text.`);
        description = await readStream(process.stdin);
      }

      if (!process.env.JIRA_USERNAME || !process.env.JIRA_PASSWORD) {
        log.error(`You must set the JIRA_USERNAME and JIRA_PASSWORD environment variables`.red);
        process.exit(1);
      }

      log.info(`Creating ticket "${summary}"`);
      log.debug(`With options:`, options);
      const res = await Api.addNewIssue({
        fields: {
          project: {key: 'CLOUD'},
          issuetype: {name: options.type},
          summary,
          description,
          labels: options.label,
          reporter: {name: options.assign},
          assignee: {name: options.assign},
        },
      });

      if (!res) {
        log.error(`No response from addNewIssue`.red);
        process.exit(1);
      }
      if (res.errors) {
        log.error(`Error from addNewIssue: ${JSON.stringify(res.errors)}`.red);
        process.exit(1);
      }
      if (!res.key) {
        log.error(`An invalid status was returned from the Jira api`.red);
        process.exit(1);
      }
      log.debug(`Created ticket ${res.key}`);

      // Fill in the fields that are required for the first couple of transitions.
      let issue = await Api.getIssue(res.key, '', 'names');
      const update: any = {};
      if (!issue.fields.customfield_10002) update.customfield_10002 = options.points; // Story Points
      if (!issue.fields.customfield_14604) update.customfield_14604 = options.points; // Official Story Point Estimate
      if (!issue.fields.customfield_16028) update.customfield_16028 = 'NA'; // Design Link
      if (!issue.fields.customfield_15135) update.customfield_15135 = 'NA'; // Test Plan
      if (!issue.fields.customfield_14403) update.customfield_14403 = [{name: REVIEWER}]; // Reviewers
      if (!issue.fields.customfield_16031) update.customfield_16031 = {id: '15209'}; // Impact of Failure - Low
      if (!issue.fields.customfield_16030) update.customfield_16030 = {id: '15208'}; // Design Reviewed - No

      while (Object.keys(update).length) {
        log.debug(`Updating ticket ${issue.key}:`, JSON.stringify(update, null, 2));
        const res = await Api.updateIssue(issue.key, {update: _.mapValues(update, (u: any) => [{set: u}])});
        if (!res || !res.errors) break;

        // There were errors in the request, remove the offending fields and try again.
        _.each(Object.keys(res.errors), key => delete update[key]);
        if (Object.keys(update).length) {
          await sleep(1000); // Wait a bit for Jira to catch up
          log.debug(`  ... trying again`);
        }
      }

      log.debug(`Adding ticket ${issue.key} to sprint ${CLOUD_SPRINT_ID}`);
      await Api.addIssueToSprint(issue.key, CLOUD_SPRINT_ID);
      log.info(`Ticket ${issue.key} created`);

      if (!options.inProgress) return;
      await transitionToInProgress(issue.key, options.points);
      log.info(`Ticket ${issue.key} created and transitioned to "In Progress"`);
    });

  cmd
    .command('close')
    .description(`Close a ticket, filling in required fields with placeholders`)
    .argument('<id>', `Ticket ID (e.g. CLOUD-1234)`)
    .action(async id => {
      if (!process.env.JIRA_USERNAME || !process.env.JIRA_PASSWORD) {
        log.error(`You must set the JIRA_USERNAME and JIRA_PASSWORD environment variables`.red);
        process.exit(1);
      }
      log.debug(`Closing ticket ${id}`);
      id = id.toUpperCase();

      const issue = await Api.getIssue(id, '', 'names');
      if (issue.fields.status.name === 'In Progress') {
        const res = await Api.transitionIssue(issue.key, {
          transition: {id: 651}, // Dev Complete
          fields: {
            fixVersions: [{name: `release-` + moment().endOf('week').add(3, 'days').format('YYYY.MM.DD')}],
            customfield_26505: {id: '28309'}, // Are Manual Test Results Passing? - N/A
          },
        });
        if (res) {
          log.error(`Error transitioning to "In Progress": ${JSON.stringify(res)}`.red);
          process.exit(1);
        }
        log.info(`Ticket ${id} is now "Dev Complete"`);
      }
    });

  cmd
    .command('ready')
    .description(`Transition a ticket to "In Progress", ready to work on.`)
    .argument('<id>', `Ticket ID (e.g. CLOUD-1234)`)
    .action(async id => {
      if (!process.env.JIRA_USERNAME || !process.env.JIRA_PASSWORD) {
        log.error(`You must set the JIRA_USERNAME and JIRA_PASSWORD environment variables`.red);
        process.exit(1);
      }
      id = id.toUpperCase();
      log.debug(`Readying ticket ${id}`);
      await transitionToInProgress(id, 1);
      log.info(`Ticket ${id} is now "In Progress"`);
    });
  return cmd;
}

async function transitionToInProgress(id: string, points: number) {
  let issue = await Api.getIssue(id, '', 'names');

  if (!issue.fields.sprint) {
    log.debug(`Adding ticket ${id} to sprint ${CLOUD_SPRINT_ID}`);
    await Api.addIssueToSprint(id, CLOUD_SPRINT_ID);
  }

  if (issue.fields.status.name === 'Open') {
    log.debug(`Transitioning to "Desgin"`);
    const res = await Api.transitionIssue(id, {transition: {id: 741}});
    if (res) {
      log.error(`Error transitioning to "Design": ${JSON.stringify(res)}`.red);
      process.exit(1);
    }
  }

  issue = await Api.getIssue(id, '', 'names');
  if (issue.fields.status.name === 'Design') {
    log.debug(`Transitioning to "In Progress"`);
    const res = await Api.transitionIssue(id, {
      transition: {id: 461},
      fields: {
        customfield_16029: points, // Post-Design Story Point Estimate
      },
    });
    if (res) {
      log.error(`Error transitioning to "In Progress": ${JSON.stringify(res)}`.red);
      process.exit(1);
    }
  }
}

async function readStream(stream) {
  const chunks = [];
  for await (const chunk of stream) chunks.push(chunk);
  return Buffer.concat(chunks).toString('utf8');
}
