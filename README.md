# Malipo+ (malipo-plus) <img src ="https://github.com/EdwinWalela/malipoplus/blob/master/logo.png" align="left" width="50" height="50"/>

M-PESA Online Payment REST API. Easily intergrate M-Pesa Online payment API into your application using HTTP requests.
## Installation
Simply clone the repo and install all dependancies `npm install`

run `npm start` to spin up the API on `localhost:3000`

## API info
Currently all payments request are sent to M-Pesa Test paybill which will be reversed in atmost 24 hours

## API config
Base url : `https://malipo-plus.herokuapp.com`

headers : `none`

response format : `json`

## End-Points

### - POST api/newpayment
| Query          | Value        |
| :------------- |:------------:|
| phonenumber    | 254700000000 |
| amount         | 200          |

After a transacton request is sent successfuly sent to the user expect such a response:
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
| Body           | Value        |
| :------------- |:------------:|
| phonenumber    | 254700000000 |
| amount         | 200          |
