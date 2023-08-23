#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkWorkshop001Stack } from '../lib/cdk-workshop-001-stack';

const app = new cdk.App();
new CdkWorkshop001Stack(app, 'CdkWorkshop001Stack');
