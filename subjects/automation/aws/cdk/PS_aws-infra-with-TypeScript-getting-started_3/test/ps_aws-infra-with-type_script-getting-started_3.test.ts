import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as PsAwsInfraWithTypeScriptGettingStarted3 from '../lib/ps_aws-infra-with-type_script-getting-started_3-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new PsAwsInfraWithTypeScriptGettingStarted3.PsAwsInfraWithTypeScriptGettingStarted3Stack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
