const request = require('request-promise');

const url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
const auth = "Basic " + new Buffer(process.env.CONSUMER_KEY + ":" + process.env.CONSUMER_SECRET).toString("base64");

const options = {
  url : url,
  headers : { "Authorization" : auth }
}

// Export request promise
module.exports = request(options);

