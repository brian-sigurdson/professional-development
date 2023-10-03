import { Stack, StackProps } from 'aws-cdk-lib'
import { AttributeType, Table as DynamodbTable, ITable } from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';
import { getSuffixFromStack } from '../Utils';


export class DataStack extends Stack {

    public readonly spacesTable: ITable

    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const suffix = getSuffixFromStack(this);

        this.spacesTable = new DynamodbTable(this, 'SpacesTable', {
            deletionProtection: true,
            partitionKey: {
                name: 'id',
                type: AttributeType.STRING
            },
            tableName: `SpaceTable-${suffix}`
        })
    }
}