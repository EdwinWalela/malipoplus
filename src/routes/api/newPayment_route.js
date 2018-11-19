const Router = require('express').Router();

const request = require("request");
// new token generator
const newToken = require("../../../config/access_token");
//encoded pass key and timestamp 
const pass = require("../../../config/password");
// new payment details
const payment = require("../../../config/payment");
// callback url
const credentials = require("../../../config/credentials");

Router.post('/',(req,res)=>{
    if(req.body.phonenumber.length == 12 && req.body.amount > 0){
        newToken.then(body=>{
            body = JSON.parse(body);
            const options = {
                url:' https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
                headers: {
                'Authorization' :'Bearer ' + body.access_token
                },
                json:{
                "BusinessShortCode":payment.BusinessShortCode,
                "Password": pass.key,
                "Timestamp": pass.timestamp,
                "TransactionType": "CustomerPayBillOnline",
                "Amount": req.body.amount,
                "PartyA": req.body.phonenumber,
                "PartyB": payment.BusinessShortCode,
                "PhoneNumber": req.body.phonenumber,
                "CallBackURL": credentials.CallBackURL,
                "AccountReference": "account",
                "TransactionDesc": "please work" 
                }
            };
            const callback = (err,res) =>{
                console.log(res.body);
            }
			request.post(options,callback);
			res.status(200).send('OK');
        })
    }else{
        res.send(503,'parameter error');
    }
})

module.exports = Router;