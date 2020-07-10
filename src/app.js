const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const app = express();
const cors = require("cors");
// ROUTES
const transVerificationRoutes = require('./routes/api/transVerification_route');
const newTransRoute = require('./routes/api/newPayment_route');


mongoose.connect(process.env.DB_URI);

mongoose.connection
    .once('open',()=>console.log('connected to db'))
    .on('error',(err)=>console.log)

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api/newPayment',newTransRoute);
app.use('/api/verify',transVerificationRoutes);

app.get('/',(req,res)=>{
    res.json('home');
})

app.listen(port,()=>{
    console.log(`listening to requests on port:${port}`);
})
