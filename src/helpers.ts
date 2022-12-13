import * as _ from 'lodash';
import axios from 'axios';
import log from 'loglevel';

let allNodes;

const IP_RE = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
const INSTANCE_ID_RE = /^i-[a-z0-9]+/;
const AZURE_ID_RE = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;

export async function lookupMachine(id: string) {
  const client = axios.create({baseURL: 'https://opsplatform.adsrvr.org/api/', headers: {'X-Api-Key': process.env.OPSPLATFORM_API_KEY}});
  let node = [];
  if (id.match(IP_RE)) {
    log.debug(`Look up IP ${id}`);
    allNodes ||= await client.get(`node`).then(res => res.data);
    node = _.filter(allNodes, n => n.InternalIP?.toLowerCase().trim() === id.toLowerCase());
  } else if (id.match(INSTANCE_ID_RE)) {
    log.debug(`Look up AWS/Aliyun ${id}`);
    allNodes ||= await client.get(`node`).then(res => res.data);
    node = _.filter(allNodes, n => n.InstanceId?.toLowerCase().trim() === id.toLowerCase());
  } else if (id.match(AZURE_ID_RE)) {
    log.debug(`Look up Azure ${id}`);
    allNodes ||= await client.get(`node`).then(res => res.data);
    node = _.filter(allNodes, n => n.InstanceId?.toLowerCase().trim() === id.toLowerCase());
  } else {
    log.debug(`Look up Hostname ${id}`);
    node = [await client.get(`node/${id}`).then(res => res.data)];
  }
  if (!node.length) {
    throw new Error(`no matches`);
  }
  return node;
}

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
