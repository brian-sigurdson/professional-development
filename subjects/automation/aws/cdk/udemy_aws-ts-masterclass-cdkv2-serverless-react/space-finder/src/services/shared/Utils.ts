import { APIGatewayProxyResult } from "aws-lambda";
import { JSONError } from "./Validator";
import { randomUUID } from "crypto";



export function parseJSON(arg: string) {
    try {
        return JSON.parse(arg);
    } catch (error) {
        throw new JSONError(error.message);
    }
}

export function createRandomId() {
    return randomUUID();
}

export function addCorsHeader(arg: APIGatewayProxyResult) {
    if (!arg.headers) {
        arg.headers = {};
    }
    arg.headers['Access-Control-Allow-Origin'] = '*';
    arg.headers['Access-Control-Allow-Methods'] = '*';
}