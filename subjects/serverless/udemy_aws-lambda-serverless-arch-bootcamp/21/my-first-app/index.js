// this is not working
// const { printMessage } = require("./logger");
// printMessage.log("hello world");

// this works
const logger = require("./logger");
const _ = require("underscore");

logger.log("hello world");
console.log(_.first([5,4,3,2,1]));
