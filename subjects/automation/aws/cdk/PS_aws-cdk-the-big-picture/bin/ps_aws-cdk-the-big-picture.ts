#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { PsAwsCdkTheBigPictureStack } from '../lib/ps_aws-cdk-the-big-picture-stack';

const app = new cdk.App();
new PsAwsCdkTheBigPictureStack(app, 'PsAwsCdkTheBigPictureStack');
