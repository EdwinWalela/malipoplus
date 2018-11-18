const Router = require('express').Router();
const Transaction = require('../../models/transaction-schema');

Router.post('/',(req,res)=>{
    console.log('new transaction recieved!');
    let data = req.body.Body;
    
    if(data.stkCallback.ResultCode == 0){
       let transactionData = data.stkCallback.CallbackMetadata.Item;
       new Transaction({
            amount:transactionData[0].Value,
            recieptNo:transactionData[1].Value,
            transactionDate:new Date().getTime(),
            phoneNumber:transactionData[4].Value
        }).save().then(()=>{
            console.log('new transaction recorded');
        })
    }
    res.json('OK');
})


module.exports = Router;