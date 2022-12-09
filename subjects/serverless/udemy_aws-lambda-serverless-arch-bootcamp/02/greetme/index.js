const greeting = {
    "en": "Hello",
    "fr": "Bonjour",
    "hi": "Namaste",
    "es": "Hola",
    "pt": "Ola",
    "it": "Ciao",
    "de": "Hallo"
}

export async function handler(event) {

    let name = event.pathParameters.name;
    let {lang, ...info} = event.queryStringParameters || {};

    let message = `${greeting[lang] ? greeting[lang] : greeting['en'] } ${name}`

    let response = {
        message: message,
        info: info,
        timestamp: new Date()
    }

    return {
        statusCode: 200,
        body: JSON.stringify(response)
    }
}