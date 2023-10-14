import { DynamoDBClient, GetItemCommand, PutItemCommand, ScanCommand, UpdateItemCommand } from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda";

export async function updateSpace(event: APIGatewayProxyEvent, ddbClient: DynamoDBClient): Promise<APIGatewayProxyResult> {

    if (event.queryStringParameters && ('id' in event.queryStringParameters) && event.body) {

        const parseBody = JSON .parse(event.body);
        const spaceId = event.queryStringParameters['id'];
        const requestBodyKey = Object.keys(parseBody)[0];
        const requestBodyValue = parseBody[requestBodyKey];

        console.log("spaceId: " + spaceId);
        console.log("requestBodyKey: " + requestBodyKey);
        console.log("requestBodyValue: " + requestBodyValue);
       
        const updateResult = await ddbClient.send(new UpdateItemCommand({
            TableName: process.env.TABLE_NAME,
            Key: {
                'id': {S: spaceId}
            },
            UpdateExpression: 'set #zzzNew = :new',
            ExpressionAttributeValues: {
                ':new': {
                    S: requestBodyValue
                }
            },
            ExpressionAttributeNames: {
                '#zzzNew': requestBodyKey
            },
            ReturnValues: 'UPDATED_NEW'
        }));

        return {
            statusCode: 204,
            body: JSON.stringify(updateResult.Attributes)
        }

    } else {
        return {
            statusCode: 204,
            body: JSON.stringify('Please provide correct args!')
        }
    }
}