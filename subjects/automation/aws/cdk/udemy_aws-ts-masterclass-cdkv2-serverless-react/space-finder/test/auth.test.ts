import { S3 } from "aws-cdk-lib/aws-ses-actions";
import { AuthService } from "./AuthService";
import { ListBucketsCommand, S3Client } from "@aws-sdk/client-s3";


async function testAuth(){
    const service = new AuthService();
    const loginResult = await service.login(
        'user1',
        'OkX?Vz#:~)+N2)Yu~CiL'
    )
    // console.log(loginResult.getSignInUserSession().getIdToken().getJwtToken());
    const credentials = await service.generateTemporaryCredentials(loginResult);
    // console.log(credentials);
    const buckets = await listBuckets(credentials);
    console.log(buckets);

}

async function listBuckets(credentials: any) {
    const client = new S3Client({
        credentials: credentials
    });
    const command = new ListBucketsCommand({});
    const result = await client.send(command);
    return result;
}

testAuth();