module.exports.handler = (event, context, callback) => {

  const message = {
    message: 'Hello, world!',
    event 
  };

  callback(null, message);

};