# Malipo+ (malipo-plus) <img src ="https://github.com/EdwinWalela/malipoplus/blob/master/logo.png" align="left" width="50" height="50"/>
<a href="https://snyk.io/test/github/EdwinWalela/malipoplus?targetFile=package.json"><img src="https://snyk.io/test/github/EdwinWalela/malipoplus/badge.svg?targetFile=package.json" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/github/EdwinWalela/malipoplus?targetFile=package.json" style="max-width:100%;"></a>
[![Build Status](https://travis-ci.org/EdwinWalela/malipoplus.svg?branch=master)](https://travis-ci.org/EdwinWalela/malipoplus)

M-PESA Online Payment REST API. Easily play with the M-Pesa Online payment API on a local enviroment or intergrate it into your application using Malipo+.

## Prerequisites
* Javascript 
* Node 
* HTTP requests


## 1. Installation
Simply fork then clone the repo and install all dependancies `npm install`

### Requirements
 
1. For making HTTP requests [You can download Postman Here](https://www.getpostman.com/apps)
2. Create a Safaricom new developer account [Here](https://developer.safaricom.co.ke/login-register) 
3. Click on `Add a new app` and you will receive a `consumer key` and `consumer secret`
   ### Local installation
4. Create a new enviroment variables file `.env` in `malipoplus` (remember to include it `.gitignore`)

    This will house all the neccessary authentication configurations required to communicate with the safaricom Lipa na MPesa API

```
    CB_URL=
    CONSUMER_KEY=
    CONSUMER_SECRET=
    DB_URI=
    PASS_KEY=
```

* callbackURL - a `live` server where The M-Pesa API will send a response to after the user authenticates the transaction. The response
will be saved in the database in the format below:
```
{
    "_id": {
        "$oid": "5bf1bcf0f106d80016efce20"
    },
    "amount": 1,
    "recieptNo": "MKI7YPUA0D",
    "transactionDate": 1542569200319,
    "phoneNumber": 254700000000,
}
```
5. run `npm start` to spin up the API on `localhost:3000`

## 2. API info
Currently all payments request are sent to M-Pesa Test paybill which will be reversed in atmost 24 hours

## 3. API config
Base url : `https://malipoplus.herokuapp.com/`

headers : `none`

response format : `application/json`

request body : `application/x-www-form-urlencoded`

The business short code is located in `/config/payments.js`
    You can use your own personal paybill but this should be done after [filling the test cases](https://developer.safaricom.co.ke/production_profile/form_production_profile) located on safaricom's developers dashboard. After which you will recieve production credentials. Step by Step [documentation can be found here](https://developer.safaricom.co.ke/docs#test-cases)

## 4. End-Points

### - POST api/newpayment
| Body           | Value        |
| :------------- |:------------:|
| phonenumber    | 254700000000 |
| amount         | 200          |

  POST `https://malipoplus.herokuapp.com/api/newpayment`

  After a transacton request is successfuly sent to the user, expect such a response:
  ```
  {
    "MerchantRequestID": "2133-8623129-1",
    "CheckoutRequestID": "ws_CO_DMZ_172926767_19112018131435269",
    "ResponseCode": "0",
    "ResponseDescription": "Success. Request accepted for processing",
    "CustomerMessage": "Success. Request accepted for processing"
  }
  ```
  **Response Code '0'** indicates a successful stk push request to the user

### - GET api/verify
| Query          | Value        |
| :------------- |:------------:|
| phonenumber    | 254700000000 |
| amount         | 200          |


   GET `https://malipoplus.herokuapp.com/api/verify?phonenumber=254706496885&amount=200`
     
   A status of 200 indicates that the transaction was successfully verified 
    
   | response| Value |
   | :-----: |:-----:|
   | status  |  200  |
   | body    |  OK   |
   
   
   A status of 404 will be sent if the specified payment does not exist or if the payment has already been verified
   
   | response| Value |
   | :-----: |:-----:|
   | status  | 404 |
   | body    | Not Found  |
   
  
 ## 5. TODO
 - [ ] Write tests
 
 - [ ] Structure transaction verification response body
 
 - [x] Handle incorrect mpesa pin
 
 - [x] Handle cancelled STK push by user
 
 - [ ] Create a interactive front-end for the api (educational)
  
 ## 6. Refferences
  * [Peter Njeru](https://peternjeru.co.ke/safdaraja/ui/)
  * [Safaricom Daraja](https://developer.safaricom.co.ke/)
