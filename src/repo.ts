import simpleGit from 'simple-git';
import fs from 'fs';
import path from 'path';
import moment from 'moment-timezone';
import log from 'loglevel';

import {tmpDir} from './index';

export async function updateGitlabRepo(name: string, url: string, cacheTime = moment.duration(10, 'minute')) {
  const dir = path.resolve(tmpDir, name);
  if (!fs.existsSync(dir)) {
    log.info(`Cloning ${url} to ${dir}`);
    const git = simpleGit();
    try {
      await git.clone(url, dir);
    } catch (err) {
      log.error(`Unable to clone ${url} to ${dir}: ${err.toString()}`);
      process.exit(1);
    }
  } else {
    let stat;
    try {
      stat = fs.statSync(path.resolve(dir, '.git', 'FETCH_HEAD'));
    } catch (err) {
      stat = {mtime: '1970-01-01T00:00:00'};
    }
    const age = moment.duration(moment().diff(stat.mtime));
    if (age.asSeconds() >= cacheTime.asSeconds()) {
      const git = simpleGit(dir);
      log.debug(`Updating ${name} in ${dir}`);
      await git.pull();
    } else {
      log.debug(`Not updating ${name} repo in ${dir}, the last pull was ${age.humanize()} ago (cache time is ${cacheTime.humanize()})`);
    }
  }
}

export function updateAnsible() {
  return updateGitlabRepo('ansible', 'git@gitlab.adsrvr.org:thetradedesk/ansible.git');
}

export function updateChef() {
  return updateGitlabRepo('chef', 'git@gitlab.adsrvr.org:thetradedesk/chef.git');
}

export function updateInfradesc() {
  return updateGitlabRepo('infradesc', 'git@gitlab.adsrvr.org:thetradedesk/teams/cloud/infradesc.git');
}
