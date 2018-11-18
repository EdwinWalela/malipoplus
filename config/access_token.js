const request = require('request-promise');
const fs = require('fs');
const keys = require('./credentials');

const consumer_key = keys.consumer_key;
const consumer_secret = keys.consumer_secret;

const url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
const auth = "Basic " + new Buffer(consumer_key + ":" + consumer_secret).toString("base64");


const options = {
  url : url,
  headers : { "Authorization" : auth }
}

// Export request promise
module.exports = request(options);

