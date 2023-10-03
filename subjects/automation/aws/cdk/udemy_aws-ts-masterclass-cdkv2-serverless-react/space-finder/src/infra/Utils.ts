import { Fn, Stack } from "aws-cdk-lib";


export function getSuffixFromStack(stack: Stack) {
    const shortSTackId = Fn.select(2, Fn.split('/', stack.stackId));
    const suffix = Fn.select(4, Fn.split('-', shortSTackId));
    return suffix;
}   