import { type CognitoUser } from "@aws-amplify/auth";
import { Amplify, Auth } from "aws-amplify"

const awsRegion = 'us-east-1';

Amplify.configure({
    Auth: {
        region: awsRegion,
        userPoolId: 'us-east-1_sLrFkDaI9',
        userPoolWebClientId: '6dr01pfrnlap34ob7ta1hkdnrr',
        authenticationFlowType: 'USER_PASSWORD_AUTH'
    }
});

export class AuthService {

    public async login(userName: string, password: string) {
        const result = await Auth.signIn(userName, password) as CognitoUser;
        return result;
    }
}