// const moment = require("moment/moment");

const greeting = {
    "en": "hello",
    "fr": "bonjour",
    "hi": "namaste"
}

exports.handler = async (event) => {

    // node 8 example, doesn't work with node 18
    // i won't mess with for now
    let name = event.pathParameters.name;
    let {lang, ...info} = event.queryStringParameters;

    let message = `${greeting[lang] ? greeting[lang] : greeting['en'] } ${name}`

    let response = {
        message: message,
        info: info,
        // timestamp: moment().unix()
    }

    return {
        statusCode: 200,
        body: JSON.stringify(response)
    }
}