#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { PsAwsInfraWithTypeScriptGettingStarted3Stack } from '../lib/ps_aws-infra-with-type_script-getting-started_3-stack';
import { Tags } from '@aws-cdk/core';

const app = new cdk.App();
const stack = new PsAwsInfraWithTypeScriptGettingStarted3Stack(app, 'PsAwsInfraWithTypeScriptGettingStarted3Stack');
Tags.of(stack).add('App', 'DocumentManagement');
Tags.of(stack).add('Environment', 'Dev');
