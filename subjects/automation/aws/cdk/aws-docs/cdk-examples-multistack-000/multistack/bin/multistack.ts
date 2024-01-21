#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { MultistackStack } from '../lib/multistack-stack';

const app = new cdk.App();
const stackA = new MultistackStack(app, 'MultistackStack-Encrypt', {
  encryptBucket: true
});

const stackB = new MultistackStack(app, 'MultistackStack-NonEncrypt', {
  encryptBucket: false
});