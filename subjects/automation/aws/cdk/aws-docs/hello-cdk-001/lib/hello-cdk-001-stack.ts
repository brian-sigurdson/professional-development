import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { aws_s3 as s3 } from 'aws-cdk-lib';

export class HelloCdk001Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new s3.Bucket(this, 'MyFirstBucket', {
      versioned: true,
      bucketName: 'name-bks-aws-docs-bucket-1234',
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true
    });
  }
}
