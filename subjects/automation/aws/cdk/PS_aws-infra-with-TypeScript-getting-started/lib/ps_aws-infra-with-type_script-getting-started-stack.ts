import * as cdk from '@aws-cdk/core';
import { Bucket, BucketEncryption } from '@aws-cdk/aws-s3';
import { Networking } from './networking';
import { DocumentManagementAPI } from './api';
import { Tags } from '@aws-cdk/core';
import * as s3Deploy from '@aws-cdk/aws-s3-deployment'
import * as path from 'path';

export class PsAwsInfraWithTypeScriptGettingStartedStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const bucket = new Bucket(this, 'name-bks-ps-aws-infr-with-ts-getting-started', {
      encryption: BucketEncryption.S3_MANAGED
    })

    new cdk.CfnOutput(this, 'name-bks-ps-aws-infr-DocumentsBucketName', {
      value: bucket.bucketName,
      exportName: 'DocumentsBucketName'
    });

    const networkingStack = new Networking(this, 'NetworkingConstruct', {
      maxAzs: 2
    })

    new Networking(this, 'NetworkingConstruct', {
      maxAzs: 2
    })

    Tags.of(networkingStack).add('Module', 'Networking')

    const api = new DocumentManagementAPI(this, 'DocumentManagementAPI');
    // const api = new DocumentManagementAPI(this, 'DocumentManagementAPI', {
    //   documentBucket: bucket
    // });

    Tags.of(api).add('Module', 'API');

  }
}
