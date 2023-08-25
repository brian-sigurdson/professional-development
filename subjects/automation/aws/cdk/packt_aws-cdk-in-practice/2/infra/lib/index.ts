import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { S3Bucket } from './constructs/S3Bucket';

// This is the interface we use to pass the environment as a variable to the construct
interface Props {
  environment: string,
}

// these classes are not in the text
// i've just created them to play around and pretend they actuall do something special
export class WebStackDev extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket1 = new S3Bucket(this, 'NameBksMyRemovableBucket', {
      environment: 'development'
    })
   
  }
}

export class WebStackProd extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket2 = new S3Bucket(this, 'NameBksMyRemovableBucket', {
      environment: 'production'
    })    
  }
}
