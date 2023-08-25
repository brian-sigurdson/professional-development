// import { SynthUtils } from '@aws-cdk/assert';
import { Template } from '@aws-cdk/assertions';
import { Stack } from '@aws-cdk/core';

import dlq = require('../lib/dead-letter-queue');

test('dlq creates an alarm', () => {
  const stack = new Stack();
  new dlq.DeadLetterQueue(stack, 'DLQ');
  // expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot(); #didn't work
  expect(Template.fromStack(stack).toJSON()).toMatchSnapshot();
});