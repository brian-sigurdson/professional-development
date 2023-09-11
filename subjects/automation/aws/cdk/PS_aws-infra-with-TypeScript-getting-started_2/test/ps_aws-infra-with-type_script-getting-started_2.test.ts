import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as PsAwsInfraWithTypeScriptGettingStarted2 from '../lib/ps_aws-infra-with-type_script-getting-started_2-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new PsAwsInfraWithTypeScriptGettingStarted2.PsAwsInfraWithTypeScriptGettingStarted2Stack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
