import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda-nodejs';
import { Runtime } from '@aws-cdk/aws-lambda';
import * as path from 'path';

interface DocumentManagementAPIProps {

}

export class DocumentManagementAPI extends cdk.Construct {
    constructor(scope: cdk.Construct, id: string, props?: DocumentManagementAPIProps) {
        super(scope, id);

        // forget it.
        // 1.62.0 doesn't work with newer node
        // v1.204.0 doesn't like other stuff .
        
        // just watch the rest of the example, or move onto the Udemy course
        // Code with AWS and Typescript by creating serverless projects with CDK V2, CloudFormation, Cognito, Lambda and Amplify!
        // The Udemy course is using v2 of the cdk and has lambda as well...
        // I'll come back and "fix" this later for practie.
        const getDocumentsFunction = new lambda.NodejsFunction(this, 'GetDocumentsFunction', {
            // runtime will only explicitly accept node 10 or 12 with version 1.62.0 that the example uses
            // so i bumped to the last good version 1, 1.204.0
            runtime: Runtime.NODEJS_16_X,
            entry: path.join(__dirname, '..', 'api', 'getDocuments', 'index.ts'),
            handler: 'getDocuments',
            bundling: {
                externalModules: [
                    'aws-sdk',
                ]
            }
            // externalModules: [
            //     'aws-sdk'
            // ],
        });
    }
}