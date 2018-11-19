const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newTransSchema = new Schema({
    amount:Number,
    recieptNo:String,
    transactionDate:Number,
    phoneNumber:Number,
    confirmed:Boolean,
})

const newTrans = mongoose.model('transactions',newTransSchema);

module.exports = newTrans;
