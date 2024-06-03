#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { PsAwsCdkTheBigPicture3Stack } from '../lib/ps_aws-cdk-the-big-picture_3-stack';

const app = new cdk.App();
new PsAwsCdkTheBigPicture3Stack(app, 'PsAwsCdkTheBigPicture3Stack');
