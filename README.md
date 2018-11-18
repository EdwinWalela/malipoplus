# Malipo+ (malipo-plus)
M-PESA Online Payment REST API
(under-development)

Easily intergrate M-Pesa Online payment API into your application using HTTP requests.

## End-Points
### api/newpayment
#### Body:
- mobile - user's phone number (+254..)
- amount - amount user is required to pay
### api/verify
#### Body:
- phonenumber 
- amount
