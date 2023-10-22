import { Fn, Stack } from "aws-cdk-lib";
import { APIGatewayProxyEvent } from "aws-lambda";


export function getSuffixFromStack(stack: Stack) {
    const shortSTackId = Fn.select(2, Fn.split('/', stack.stackId));
    const suffix = Fn.select(4, Fn.split('-', shortSTackId));
    return suffix;
}   

export function hasAdminGroup(event: APIGatewayProxyEvent) {
    const groups = event.requestContext.authorizer.claims['cognito:gorups'];
    if (groups) {
        return (groups as string).includes('admins');
    } else {
        return false;
    }
}