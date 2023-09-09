#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { PsAwsCdkTheBigPicture2Stack } from '../lib/ps_aws-cdk-the-big-picture_2-stack';

const app = new cdk.App();
new PsAwsCdkTheBigPicture2Stack(app, 'PsAwsCdkTheBigPicture2Stack', {
    env: { account: process.env.CDK_DEFAULT_ACCOUNT, 
           region: process.env.CDK_DEFAULT_REGION 
         },
  });
