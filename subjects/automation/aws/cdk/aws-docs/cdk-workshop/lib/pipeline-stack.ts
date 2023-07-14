import * as cdk from 'aws-cdk-lib';
import * as codecommit from 'aws-cdk-lib/aws-codecommit';
import { Construct } from 'constructs';
import { WorkshopPipelineStage } from './pipeline-stage';
import { CodeBuildStep, CodePipeline, CodePipelineSource } from 'aws-cdk-lib/pipelines';
import { DeployTimeSubstitutedFile } from 'aws-cdk-lib/aws-s3-deployment';

export class WorkshopPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // create a CodeCommit repository called 'WorkshopRepo'
    const repo = new codecommit.Repository(this, 'WorkshopRepo', {
      repositoryName: "WorkshopRepo"
    });

    // The basic pipeline declaration. This sets the initial structure of the pipeline
    const pipeline = new CodePipeline(this, 'Pipeline', { 
      pipelineName: 'WorkshopPipeline',
      synth: new CodeBuildStep('SynthStep', {
        input: CodePipelineSource.codeCommit(repo, 'main'),
        installCommands: [
          'npm install -g aws-cdk'
        ],
        commands: [
          'npm ci',
          'npm run build',
          'npx cdk synth'
        ]
      })
    });

    const dev = new WorkshopPipelineStage(this, 'Dev');
    // const test = new WorkshopPipelineStage(this, 'Test');
    // const prod = new WorkshopPipelineStage(this, 'Prod');
    const devStage = pipeline.addStage(dev);
    // const testStage = pipeline.addStage(test);
    // const prodStage = pipeline.addStage(prod);

    devStage.addPost(
      new CodeBuildStep('TestAPIGatewayEndpoint', {
        projectName: 'TestAPIGatewayEndpoint',
        envFromCfnOutputs: {
          ENDPOINT_URL: dev.hcEndpoint
        },
        commands: [
          'curl -Ssf $ENDPOINT_URL',
          'curl -Ssf $ENDPOINT_URL/hello',
          'curl -Ssf $ENDPOINT_URL/test'
        ]
      })
    )
  }
}