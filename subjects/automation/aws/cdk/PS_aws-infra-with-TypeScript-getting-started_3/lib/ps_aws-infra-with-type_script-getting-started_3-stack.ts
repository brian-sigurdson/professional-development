import * as cdk from '@aws-cdk/core';
import { Bucket, BucketEncryption } from '@aws-cdk/aws-s3';
import { Networking } from './networking';

export class PsAwsInfraWithTypeScriptGettingStarted3Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, 'namebksDocumentsBucket', {
      encryption: BucketEncryption.S3_MANAGED
    });

    new cdk.CfnOutput(this, 'namebksDocumentBucketNameExport', {
      value: bucket.bucketName,
      exportName: 'namebksDocumentsBucketName'
    });

    new Networking(this, 'NetworkingConstruct', {
      maxAzs: 2
    });

  }
}
