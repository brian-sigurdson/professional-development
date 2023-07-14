import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import { HitCounter } from './hitcounter';
import { Construct } from 'constructs';
// import { TableViewer } from 'cdk-dynamo-table-viewer';


export class CdkWorkshopStack extends cdk.Stack {
  public readonly hcEndpoint: cdk.CfnOutput;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // define an aws lambda resource
    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_16_X,
      code: lambda.Code.fromAsset('lambda'),
      handler: 'hello.handler'
    });

    const helloWithCounter = new HitCounter(this, 'HelloHitCounter', {
      downstream: hello 
    });

    // define an api gateway rest api resource backed by our "hello" function
    const gateway = new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: helloWithCounter.handler
    });

    // running this throws errors about the use of node12 to create lambdas
    // I couldn't figure it out
    // 
    // new TableViewer(this, 'ViewHitCounter', {
    //   title: 'Hello Hits',
    //   table: helloWithCounter.table,
    //   sortBy: "-path"
    // });

    this.hcEndpoint = new cdk.CfnOutput(this, 'GatewayUrl', {
      value: gateway.url 
    });

  }
}
