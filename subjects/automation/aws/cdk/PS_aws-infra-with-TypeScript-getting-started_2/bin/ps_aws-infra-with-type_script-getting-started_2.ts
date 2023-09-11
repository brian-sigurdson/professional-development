#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { PsAwsInfraWithTypeScriptGettingStarted2Stack } from '../lib/ps_aws-infra-with-type_script-getting-started_2-stack';

const app = new cdk.App();
const stack = new PsAwsInfraWithTypeScriptGettingStarted2Stack(app, 'PsAwsInfraWithTypeScriptGettingStarted2Stack');
cdk.Tags.of(stack).add('App', 'DocumentManagement');
cdk.Tags.of(stack).add('Environment', 'Development');

