import * as cdk from '@aws-cdk/core';
import { Bucket, BucketEncryption } from '@aws-cdk/aws-s3';

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

  }
}
