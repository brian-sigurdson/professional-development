import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';

export interface HitCounterProps {
  // the function for which we want to count urll hits
  downstream: lambda.IFunction;
  /**
   * The read capacity units for the table.
   * Must be > 5 and < 20.
   * @default 5
   */
  readCapacity?: number;
}

export class HitCounter extends Construct {

  // allows accessing the counter function
  public readonly handler: lambda.Function;

  // the hitcounter table
  public readonly table: dynamodb.Table;

  constructor(scope: Construct, id: string, props: HitCounterProps) {
    super(scope, id);

    if (props.readCapacity !== undefined && ( props.readCapacity < 5 || props.readCapacity > 20 )){
      throw new Error('readCapacity must be greater than 5 or less than 20');
    }

    const table = new dynamodb.Table(this, 'Hits', {
      partitionKey: {
        name: 'path',
        type: dynamodb.AttributeType.STRING
      },
      encryption: dynamodb.TableEncryption.AWS_MANAGED,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      readCapacity: props.readCapacity ?? 5
    });

    this.table = table;

    this.handler = new lambda.Function(this, 'HitCounterHandler', {
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'hitcounter.handler',
      code: lambda.Code.fromAsset('lambda'),
      environment: {
        DOWNSTREAM_FUNCTION_NAME: props.downstream.functionName,
        HITS_TABLE_NAME: table.tableName
      }
    });

    // grant the lambda role read/write permission to our table
    table.grantReadWriteData(this.handler);

    // grant the lambda role invoke permissions to the downstream function
    props.downstream.grantInvoke(this.handler);

  }
}