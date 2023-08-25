import cloudwatch = require('@aws-cdk/aws-cloudwatch');
import sqs = require('@aws-cdk/aws-sqs');
import { Construct, Duration } from '@aws-cdk/core';

export class DeadLetterQueue extends sqs.Queue {
  public readonly messagesInQueueAlarm: cloudwatch.IAlarm;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    // Add the alarm
    this.messagesInQueueAlarm = new cloudwatch.Alarm(this, 'Alarm', {
      alarmDescription: 'There are messages in the Dead Letter Queue',
      evaluationPeriods: 1,
      threshold: 1,
      metric: this.metricApproximateNumberOfMessagesVisible(),
      // add a period property of 1 minute to override the default of 5 minutes
      // period: Duration.minutes(1),  # error
    });
  }
}