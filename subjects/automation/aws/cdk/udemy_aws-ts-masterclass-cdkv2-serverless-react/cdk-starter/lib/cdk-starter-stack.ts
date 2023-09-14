import { strict } from 'assert';
import * as cdk from 'aws-cdk-lib';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

class L3Bucket extends Construct {
  constructor(scope: Construct, id: string, expiration: number) {
    super(scope, id);

    // create L2 s3 bucket
    new Bucket(this, 'L3Bucket', {
      lifecycleRules: [{
        expiration: cdk.Duration.days(expiration)
      }]
    });

  }
}

export class CdkStarterStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // parameters
      const duration = new cdk.CfnParameter(this, 'duration', {
        default: 6,
        minValue: 1,
        maxValue: 10,
        type: 'Number'
      });

    // create L1 s3 bucket
    new CfnBucket(this, 'MyL1Bucket', {
      lifecycleConfiguration: {
        rules: [{
          expirationInDays: 1,
          status: 'Enabled',
        }]
      }
    });

    // create L2 s3 bucket
    const myL2Bucket = new Bucket(this, 'MyL2Bucket', {
      lifecycleRules: [{
        expiration: cdk.Duration.days(duration.valueAsNumber)
      }]
    });    

    // L3 s3 bucket
    new L3Bucket(this, 'MyL3Bucket', 3);

    // outputs
    new cdk.CfnOutput(this, 'MyL2BucketName', {
      value: myL2Bucket.bucketName
    });

  }
}
