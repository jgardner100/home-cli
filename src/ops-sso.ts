import * as _ from 'lodash';
import axios from 'axios';
import keytar from 'keytar';
import log from 'loglevel';
import moment from 'moment-timezone';
import os from 'os';
import querystring from 'querystring';
import prompt from 'prompt';

export async function login() {
  let username: string;
  let password: string;
  let account = JSON.parse((await keytar.findPassword('ops-sso')) || '{}');
  if (!account || !account.username) {
    const res = await prompt.get({
      properties: {
        username: {
          description: 'OPS-SSO username',
          default: process.env.USER || os.userInfo().username,
          required: true,
        },
        password: {
          description: 'OPS-SSO password',
          hidden: true,
          required: true,
        },
      },
    });

    username = res.username;
    password = res.password;
    await keytar.setPassword('ops-sso', res.username, JSON.stringify({username, password}));
  } else {
    username = account.username;
    password = account.password;
  }

  const auth = JSON.parse((await keytar.getPassword('ops-sso-token', username)) || '');
  if (!auth) {
    log.info(`Logging in to ops-sso`);
    try {
      const res = await newLogin(username, password);
      await saveToken(username, res);
      log.info(`Logged in to ops-sso as ${username}`);
      return res.access_token;
    } catch (err) {
      log.error(`Login to ops-sso failed: ${err.toString()}`);
      return login();
    }
  }
  if (!moment().isAfter(moment(auth.expires))) return auth.access_token;
  if (moment().isAfter(moment(auth.refresh_expires))) {
    log.debug(`ops-sso refresh_token has expired, login from scratch`);
    const res = await newLogin(username, password);
    await saveToken(username, res);
    log.info(`Logged in to ops-sso as ${username}`);
    return res.access_token;
  }
  log.debug(`ops-sso access_token has expired, refreshing`);
  const res = await refreshLogin(auth.refresh_token);
  await saveToken(username, res);
  log.info(`Logged in to ops-sso as ${username}`);
  return res.access_token;
}

function newLogin(username: string, password: string): any {
  return axios
    .post(
      'https://ops-sso.adsrvr.org/auth/realms/master/protocol/openid-connect/token',
      querystring.stringify({
        client_id: 'ttd-infra-service-client',
        username,
        password,
        grant_type: 'password',
      })
    )
    .then(res => res.data);
}

function refreshLogin(refresh_token: string): any {
  return axios
    .post(
      'https://ops-sso.adsrvr.org/auth/realms/master/protocol/openid-connect/token',
      querystring.stringify({
        client_id: 'ttd-infra-service-client',
        grant_type: 'refresh_token',
        refresh_token,
      })
    )
    .then(res => res.data);
}

async function saveToken(username: string, token: any) {
  token.expires = moment().add(token.expires_in, 'second');
  token.refresh_expires = moment().add(token.refresh_expires_in, 'second');
  log.debug(`Saving details to ops-sso-token`);
  await keytar.setPassword('ops-sso-token', username, JSON.stringify(token));
}
