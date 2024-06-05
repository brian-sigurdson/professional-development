#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { PsAwsInfraWithTypeScriptGettingStarted3Stack } from '../lib/ps_aws-infra-with-type_script-getting-started_3-stack';

const app = new cdk.App();
new PsAwsInfraWithTypeScriptGettingStarted3Stack(app, 'PsAwsInfraWithTypeScriptGettingStarted3Stack');
