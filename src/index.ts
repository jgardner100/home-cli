#!/usr/bin/env node

require('dotenv').config(); // eslint-disable-line

import * as _ from 'lodash';
import axios from 'axios';
import colors from 'colors';
import commander from 'commander';
import fs from 'fs';
import https from 'https';
import log from 'loglevel';
import os from 'os';
import path from 'path';
import {execFile} from 'child_process';
import {promisify} from 'util';

import * as jira from './jira';
import * as sso from './ops-sso';
import {lookupMachine} from './helpers';

export const tmpDir = path.resolve(os.tmpdir(), 'cloudcli');

async function main() {
  log.setLevel('info');
  const program = new commander.Command();
  program.version(process.env.npm_package_version);
  program.option('-d, --debug', 'Debug mode', () => log.setLevel('debug'));
  fs.mkdirSync(tmpDir, {recursive: true});

  program
    .command(`update`)
    .description(`Update the Home CLI locally`)
    .action(async () => {
      let filename: string;
      if (os.platform() === 'darwin') filename = `home-cli-macos`;
      else if (os.platform() === 'win32') filename = `home-cli-win.exe`;
      else if (os.platform() === 'linux') filename = `home-cli-linux`;
      else {
        log.error(`Unknown platform ${os.platform()}, automatic update is not supported`.red);
        return;
      }
      const url = `https://nexus.adsrvr.org/repository/ttd-raw/cloud/${filename}`;
      log.info(`Fetching ${url}`);
      try {
        const res = await axios.get(url, {responseType: 'stream'});
        if (process.argv[0].match(/ts-node/)) {
          res.data.pipe(fs.createWriteStream(filename, {mode: 0o755})).on('finish', () => log.info(`Wrote to ${filename}`));
        } else {
          res.data.pipe(fs.createWriteStream(process.argv[0] + '.tmp', {mode: 0o755})).on('finish', () => {
            fs.renameSync(process.argv[0] + '.tmp', process.argv[0]);
            log.info(`Wrote to ${process.argv[0]}`);
          });
        }
      } catch (err) {
        log.error(`Error fetching ${url}: ${err.toString()}`.red);
        return;
      }
    });

  program
    .command(`jita`)
    .description(`Create Jita requests for the systems required for Cloud Services daily use`)
    .action(async () => {
      const token = await sso.login();
      try {
        const res = await axios
          .post(
            'https://jita.gen.adsrvr.org/graphql',
            {
              operationName: 'CreateJitaRequest',
              variables: {
                requests: [
                  {jitagroup: 'Azure Owner Prod Subscription', hours: 9, slacknotification: false},
                  {jitagroup: 'Domain Admins', hours: 9, slacknotification: false},
                  {jitagroup: 'SCRUM-CLOUD-ADMIN', hours: 9, slacknotification: false},
                  {jitagroup: 'Sudo-All', hours: 9, slacknotification: false},
                ],
              },
              query: `
                query CreateJitaRequest($requests: [WebUIJitaRequestVariablesInput!]!) {
                  createJitaRequest(requests: $requests) {
                    permissionAllowed
                    requestor
                    jitaGroup
                    message
                    __typename
                  }
                }
              `,
            },
            {
              headers: {
                authorization: `Bearer ${token}`,
                origin: 'https://jitaui.gen.adsrvr.org',
                referer: 'https://jitaui.gen.adsrvr.org/',
              },
              httpsAgent: new https.Agent({
                ca: [fs.readFileSync('/etc/ssl/certs/intermediate.pem'), fs.readFileSync('/etc/ssl/certs/root.pem')],
                rejectUnauthorized: false,
              }),
            }
          )
          .then(res => res.data);
        log.info(res);
      } catch (err) {
        log.error(err.toString());
        process.exit(1);
      }
    });

  program
    .command(`lookup`)
    .alias('find')
    .description(`Look up a virtual machine`)
    .argument('<id...>', `Hostname, IP address or instance ID of the machine`)
    .action(async ids => {
      const nodes = [];
      for (const id of ids) {
        try {
          nodes.push(...(await lookupMachine(id)));
        } catch (err) {
          log.error(`Couldn't find node from ${id}: ${err.toString()}`.red);
        }
      }
      if (!nodes.length) process.exit(1);
      _.each(nodes, (node, index) => {
        if (index !== 0) console.log('\n----------------\n');
        console.log('Hostname:    '.white + node.Name.green);
        if (node.InternalIP) console.log('IP Address:  '.white + node.InternalIP.green);
        if (node.OSName) console.log('OS:          '.white + node.OSName.green);
        if (node.StateDescription) console.log('State:       '.white + node.StateDescription.green);
        if (node.InstanceId) console.log('Instance ID: '.white + node.InstanceId.green);
      });
    });

  program.addCommand(jira.commands());

  await program.parseAsync();
}
if (require.main === module) {
  main().catch(err => console.error(err));
}
