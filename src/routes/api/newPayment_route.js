const Router = require('express').Router();
const request = require("request-promise");

const pass = require("../../../config/password");
// new payment details
const payment = require("../../../config/payment");
// new access token generator
const newToken = require("../../../config/access_token");

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
                "TransactionType": "CustomerBuyGoodsOnline",
                "Amount": req.body.amount,
                "PartyA": req.body.phonenumber,
                "PartyB": payment.BusinessShortCode,
                "PhoneNumber": req.body.phonenumber,
                "CallBackURL": process.env.CB_URL,
                "AccountReference": "MD-37A",
                "TransactionDesc": "please work" 
                }
            };
            const callback = (err,res) =>{
                response = res.body;
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