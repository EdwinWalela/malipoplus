# Malipo+ (malipo-plus) <img src ="https://github.com/EdwinWalela/malipoplus/blob/master/logo.png" align="left" width="50" height="50"/>

M-PESA Online Payment REST API. Easily intergrate M-Pesa Online payment API into your application using HTTP requests.
## API info
Currently all payments request are sent to M-Pesa Test paybill which will be reversed in atmost 24 hours

## API config
Base url : `https://malipo-plus.herokuapp.com`

headers : `none`

response format : `json`

## End-Points

### POST api/newpayment
| Query          | Value        |
| :------------- |:------------:|
| phonenumber    | 254700000000 |
| amount         | 200          |

### GET api/verify
| Body           | Value        |
| :------------- |:------------:|
| phonenumber    | 254700000000 |
| amount         | 200          |
