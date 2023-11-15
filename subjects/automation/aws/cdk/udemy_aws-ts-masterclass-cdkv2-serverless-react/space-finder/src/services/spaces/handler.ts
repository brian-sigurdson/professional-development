import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda";
import { postSpace } from "./PostSpaces";
import { getSpace } from "./GetSpaces";
import { updateSpace } from "./UpdateSpace";
import { deleteSpace } from "./DeleteSpace";
import { JSONError, MissingFieldError } from "../shared/Validator";
import { RetryStrategy } from "aws-cdk-lib/aws-batch";
import { get } from "http";
import { addCorsHeader } from "../shared/Utils";

const ddbClient = new DynamoDBClient({});

async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {

    let message: string;
    let response: APIGatewayProxyResult;

    try {
        switch(event.httpMethod) {
            case 'GET':
                const getResponse = await getSpace(event, ddbClient);  
                console.log(getResponse);
                response = getResponse;
                break; 
            case 'POST':
                const postResponse = await postSpace(event, ddbClient);
                console.log(postResponse);
                response = getResponse;
                break; 
            case 'PUT':
                const putResponse = await updateSpace(event, ddbClient);
                console.log(putResponse);
                response = getResponse;
                break;      
            case 'DELETE':
                const deleteResponse = await deleteSpace(event, ddbClient);
                console.log(deleteResponse);
                response = getResponse;
                break;                           
            default:
                message = 'Error!'
                break;
        }        
    } catch (error) {
        
        if (error instanceof MissingFieldError) {
            return {
                statusCode: 400,
                body: JSON.stringify(error.message)
            }
        }

        if (error instanceof JSONError) {
            return {
                statusCode: 400,
                body: error.message
            }
        }
        
        return {
            statusCode: 500,
            body: JSON.stringify(error.message)
        }
    }
    
    addCorsHeader(response);
    return response;
}

export { handler }