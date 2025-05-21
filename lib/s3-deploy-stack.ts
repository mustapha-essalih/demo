import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class S3DeployStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    
    // L1 Bucket
    new s3.CfnBucket(this, 'MyL1Bucket', {
      bucketName: `l1-bucket-unique-application-bucket-1210345`
    });

    // L2 Bucket
    new s3.Bucket(this, 'MyL2Bucket', {
      bucketName: `l2-bucket-unique-application-bucket-1234510`,
      encryption: s3.BucketEncryption.S3_MANAGED
    });
  }
}
