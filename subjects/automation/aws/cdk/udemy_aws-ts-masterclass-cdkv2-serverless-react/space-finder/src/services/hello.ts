import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda";
import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";


// exports.main = async function(event, context) {
//     return {
//         statusCode: 200,
//         body: JSON.stringify(`Hello! I will read from ${process.env.TABLE_NAME}`)
//     }
// }

const myS3Client = new S3Client({});

async function handler(event: APIGatewayProxyEvent, context: Context) {

    const command = new ListBucketsCommand({});
    const listBucketsResult = (await myS3Client.send(command)).Buckets;
    

    const response: APIGatewayProxyResult = {
        statusCode: 200,
        body: JSON.stringify('Hello from lambda! this is the id: ' + JSON.stringify(listBucketsResult))
    }

    console.log(event);

    return response;
}

export { handler }