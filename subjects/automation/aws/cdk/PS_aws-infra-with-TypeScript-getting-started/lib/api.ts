import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda-nodejs';
import { Runtime } from '@aws-cdk/aws-lambda';
import * as s3 from '@aws-cdk/aws-s3';
import * as path from 'path';
import * as iam from '@aws-cdk/aws-iam';
import * as apig from '@aws-cdk/aws-apigatewayv2';

interface DocumentManagementAPIProps {
  maxAzs: number
}

export class DocumentManagementAPI extends cdk.Construct {


  constructor(scope: cdk.Construct, id: string, props?: DocumentManagementAPIProps) {
    super(scope, id);

    /*
    getting the same error: Argument of type 'this' is not assignable to parameter of type 'Construct'.
    just finish watching the vid
    the version he is using is just a bit old
    */
    const getDocumentsFunction = new lambda.NodejsFunction(this, 'GetDocumentsFunction', {
      runtime: Runtime.NODEJS_16_X,
      entry: path.join(__dirname, '..', 'api', 'getDocuments', 'index.ts'),
      handler: 'getDocuments',
      externalModules: [
        'aws-sdk'
      ],
    })

  };
}