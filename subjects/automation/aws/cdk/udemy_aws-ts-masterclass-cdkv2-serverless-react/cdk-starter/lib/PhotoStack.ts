import { Construct } from "constructs";
import * as cdk from 'aws-cdk-lib';
import { Bucket } from "aws-cdk-lib/aws-s3";

export class PhotosStack extends cdk.Stack {

    private stackSuffix: string;

    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props);

      this.initializeSuffix();

      new Bucket(this, 'PhotosBucket', {
        bucketName: `name-bks-photos-bucket-${this.stackSuffix}`
      });

    }

    // stip off the last part of the stack id and use it with our resources
    private initializeSuffix() {
        // split the arn by '/' and grab last component
        const shortStackID = cdk.Fn.select(2, cdk.Fn.split('/', this.stackId));
        // split the last component by '-'
        this.stackSuffix = cdk.Fn.select(4, cdk.Fn.split('-', shortStackID));
    }    
  }