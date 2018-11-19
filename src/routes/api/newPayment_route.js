const Router = require('express').Router();

const request = require("request-promise");
// new token generator
const newToken = require("../../../config/access_token");
//encoded pass key and timestamp 
const pass = require("../../../config/password");
// new payment details
const payment = require("../../../config/payment");
// callback url
const credentials = require("../../../config/credentials");

Router.post('/',(req,res)=>{
    let response;
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
                response = res.body;
                console.log(response);
            }
            request.post(options,callback).then(()=>{
                res.status(200).send(response);
            });
        })
    }else{
        res.status(503).send('parameter error');
    }
})

module.exports = Router;