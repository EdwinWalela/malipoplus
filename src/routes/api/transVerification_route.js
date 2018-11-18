const Router = require('express').Router();
const Transaction = require('../../models/transaction-schema');

Router.get('/',(req,res)=>{
    let phoneNumber = req.query.phonenumber;
    let amount = req.query.amount;
    
    Transaction.find(
        {
            $and:[{transactionDate:{$gt:new Date().getTime()-300000}},
                  {transactionDate:{$lt:new Date().getTime()}}]
        }
    ).then(transactions=>{
        let payment = false;
        transactions.forEach(trans=>{
            console.log(trans.phoneNumber)
            if(trans.phoneNumber == phoneNumber){
               if(trans.amount != amount){
                   res.json(500,'insufficient');
               }
               payment = true;
            }
        })
        payment ? res.json('200') : res.json('404')

    }).catch(err=>{
        console.log('error: ',err);
        res.json('504',err)
    })
})

module.exports = Router;