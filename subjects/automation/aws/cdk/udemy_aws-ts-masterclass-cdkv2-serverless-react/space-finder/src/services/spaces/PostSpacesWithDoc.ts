import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda";
import { createRandomId } from "../shared/Utils";


export async function postSpaceWithDoc(event: APIGatewayProxyEvent, ddbClient: DynamoDBClient): Promise<APIGatewayProxyResult> {
    
    const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

    const randomId = createRandomId();
    const item = JSON.parse(event.body);

    const result = await ddbClient.send(new PutItemCommand({
        TableName: process.env.TABLE_NAME,
        Item: item
    }));

    console.log(result);
    return {
        statusCode: 201,
        body: JSON.stringify({id: randomId})
        // body: JSON.stringify({theEvent: event})
    }
}