import { RemovalPolicy } from "aws-cdk-lib";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

// This is the interface we use to pass the environment as a variable to the construct
interface Props {
  environment: string,
}

export class S3Bucket extends Construct {
  public readonly bucket: Bucket;

  // Every construct needs to implement a constructor
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id);

    const bucketName = props.environment === 'production' ? 'name-bks-bucket-s3' : 'name-bks-bucket-s3-dev';

    this.bucket = new Bucket(scope, 'Bucket-S3', {
      bucketName,
      // when the stack is deleted, teh bucket should be destroyed
      removalPolicy: RemovalPolicy.DESTROY,
      publicReadAccess: false, // true was denied, threw exception
    });
  }
}