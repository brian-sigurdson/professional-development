import { CdkWorkshopStack } from "./cdk-workshop-stack";
import { Stage, CfnOutput, StageProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class WorkshopPipelineStage extends Stage {
  public hcEndpoint: CfnOutput;

  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    const service = new CdkWorkshopStack(this, 'WebService');

    this.hcEndpoint = service.hcEndpoint;
  }
}