const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const app = express();
const mongoURI = require('../config/credentials').mongoDB.URI;
// ROUTES
const cbRoutes = require('./routes/api/callback_route');
const transVerificationRoutes = require('./routes/api/transVerification_route');
const newTransRoute = require('./routes/api/newPayment_route');


mongoose.connect(mongoURI,()=>{
    console.log('connected to db');
})

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api/newPayment',newTransRoute);
app.use('/api/cb',cbRoutes);
app.use('/api/verify',transVerificationRoutes);

app.get('/',(req,res)=>{
    res.json('home');
})

app.listen(port,()=>{
    console.log(`listening to requests on port:${port}`);
})
