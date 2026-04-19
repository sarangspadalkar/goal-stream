import * as cdk from 'aws-cdk-lib';
import type { Construct } from 'constructs';

export class GoalStreamStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new cdk.CfnOutput(this, 'GoalStreamStackName', {
      value: this.stackName,
      description: 'Deployed GoalStream stack name (extend with compute, networking, etc.).',
    });
  }
}
