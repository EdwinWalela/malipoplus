const Router = require('express').Router();
const Transaction = require('../../models/transaction-schema');

Router.get('/',(req,res)=>{
    let phoneNumber = req.query.phonenumber;
    let amount = req.query.amount;
    
    Transaction.findOneAndUpdate(
        {
            $and:[{phoneNumber:phoneNumber},{amount:amount},{confirmed:false}],
        },
        {$set:{confirmed:true}}
    ).then(transactions=>{
        transactions ? res.status(200).send('OK') : res.status(404).send('Not Found')
    }).catch(err=>{
        console.log('error: ',err);
        res.json('504',err)
    })

})

module.exports = Router;