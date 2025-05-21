#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { S3DeployStack } from '../lib/s3-deploy-stack';

const app = new cdk.App();
new S3DeployStack(app, 'S3DeployStack', {
    
});