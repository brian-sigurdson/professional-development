import { handler } from "../src/services/spaces/handler";

// when debugging at cli
// process.env.AWS_REGION = 'us-east-1';
// process.env.TABLE_NAME = 'SpaceTable-0a9ae641c129';

// handler({
//     httpMethod: 'POST',
//     body: JSON.stringify({
//         location: 'London'
//     })
// } as any, {} as any);

// handler({
//     httpMethod: 'GET',
//     queryStringParameters: {
//         id: '6be22149-577a-45da-9583-093fb238c0b6'
//     },
//     // body: JSON.stringify({
//     //     location: 'London'
//     // })
// } as any, {} as any);

// handler({
//     httpMethod: 'PUT',
//     queryStringParameters: {
//         id: '6be22149-577a-45da-9583-093fb238c0b6'
//     },
//     body: JSON.stringify({
//         location: 'Paris Updated'
//     })
// } as any, {} as any);

// handler({
//     httpMethod: 'GET',
//     queryStringParameters: {
//         id: '6be22149-577a-45da-9583-093fb238c0b6'
//     }
// } as any, {} as any);

// handler({
//     httpMethod: 'DELETE',
//     queryStringParameters: {
//         id: '6be22149-577a-45da-9583-093fb238c0b6'
//     }
// } as any, {} as any);

// this should throw an error
handler({
    httpMethod: 'POST',
    body: JSON.stringify({
        location: 'Paris Updated'
    })
} as any, {} as any).then(result => {
    console.log(result)
});