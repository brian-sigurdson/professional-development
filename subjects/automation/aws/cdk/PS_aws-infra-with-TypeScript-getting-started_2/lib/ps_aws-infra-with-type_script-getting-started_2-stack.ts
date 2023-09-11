import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import { Networking } from './networking';
import { DocumentManagementAPI } from './api';

export class PsAwsInfraWithTypeScriptGettingStarted2Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, 'DocumentBucket', {
      encryption: s3.BucketEncryption.S3_MANAGED
    });

    new cdk.CfnOutput(this, 'DocumentBucketExport', {
      value: bucket.bucketName,
      exportName: 'DocumentBucketName'
    });

    const networking = new Networking(this, 'NetworkingConstruct', {
      maxAzs: 2
    });

    cdk.Tags.of(networking).add('Module', 'Networking');

    const api = new DocumentManagementAPI(this, 'DocumentManagementAPI');
    cdk.Tags.of(api).add('Module', 'API');

  }
}
