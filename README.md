# Malipo+ (malipo-plus)
M-PESA Online Payment REST API
(under-development)

Easily intergrate M-Pesa Online payment API into your application using HTTP requests.

## API config
Base url : `https://malipo-plus.herokuapp.com`

headers : `none`

response format : 'json'

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
