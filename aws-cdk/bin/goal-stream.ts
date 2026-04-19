#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { GoalStreamStack } from '../lib/goal-stream-stack';

const app = new cdk.App();
new GoalStreamStack(app, 'GoalStreamStack', {});
