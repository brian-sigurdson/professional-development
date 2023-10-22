import { ConditionalOperator } from "@aws-sdk/client-dynamodb";
import { AuthService } from "./AuthService";


async function testAuth() {
    const service = new AuthService();
    const loginResult = await service.login(
        'user1',
        'OkX?Vz#:~)+N2)Yu~CiL'
    )
    console.log(loginResult.getSignInUserSession().getIdToken().getJwtToken());
}

testAuth();