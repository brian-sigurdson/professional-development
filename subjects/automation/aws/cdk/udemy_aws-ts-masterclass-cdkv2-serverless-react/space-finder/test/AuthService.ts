import { type CognitoUser } from '@aws-amplify/auth';
import { Amplify, Auth } from 'aws-amplify';
import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-providers'

const awsRegion = 'us-east-1'

Amplify.configure({
    Auth: {
        region: awsRegion,
        userPoolId: 'us-east-1_sLrFkDaI9',
        userPoolWebClientId: '6dr01pfrnlap34ob7ta1hkdnrr',
        identityPoolId: 'us-east-1:d9a42766-4bf6-4563-b5b8-b9a8bf304501',
        authenticationFlowType: 'USER_PASSWORD_AUTH'
    }
});



export class AuthService {

    public async login(userName: string, password: string) {
        const result = await Auth.signIn(userName, password) as CognitoUser;
        return result;
    }

    public async generateTemporaryCredentials(user: CognitoUser){
        const jwtToken = user.getSignInUserSession().getIdToken().getJwtToken();
        const cognitoIdentityPool = `cognito-idp.${awsRegion}.amazonaws.com/us-east-1_sLrFkDaI9`;
        const cognitoIdentity = new CognitoIdentityClient({
            credentials: fromCognitoIdentityPool({
                identityPoolId: 'us-east-1:d9a42766-4bf6-4563-b5b8-b9a8bf304501',
                logins: {
                    [cognitoIdentityPool]: jwtToken
                }
            })
        });
        const credentials = await cognitoIdentity.config.credentials();
        return credentials;
    }
}