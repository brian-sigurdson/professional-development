const { DynamoDB, Lambda } = require('aws-sdk');

exports.handler = async function(event) {
  console.log("request:", JSON.stringify(event, undefined,2));

  // create aws sdk clients
  const dynamo = new DynamoDB();
  const lambda = new Lambda();

  // update dynamo entry for 'path' with hit++
  await dynamo.updateItem({
    TableName: process.env.HITS_TABLE_NAME,
    Key: {
      path: {
        S: event.path 
      }
    },
    UpdateExpression: 'ADD hits :incr',
    ExpressionAttributeValues: {
      ':incr': {
        N: '1'
      }
    }
  }).promise();

  // call downstream function and captuer response
  const resp = await lambda.invoke({
    FunctionName: process.env.DOWNSTREAM_FUNCTION_NAME,
    Payload: JSON.stringify(event)
  }).promise();

  console.log('downstream reponse:', JSON.stringify(resp, undefined,2));

  // return respons back to upstream caller
  return JSON.parse(resp.Payload);
};