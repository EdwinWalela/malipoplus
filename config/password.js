    //-------------------------------------------------------------------------//
    //password encoding : base64.encode(Shortcode+Passkey+Timestamp)           //
    //timestamp format: YYYMMDDHHmmss                                          //
    //-------------------------------------------------------------------------//

// retrieve businessshortcode
const payment = require("./payment");

// retrieve lnm key
const credentials = require('./credentials');

const timestamp = () => {
    let now = new Date();
    let yr = now.getFullYear();
    let mth = now.getMonth() + 1;
    let dy = now.getDate();
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();;
    let mm = mth < 10 ? '0' + mth : mth;
    let dd = dy < 10 ? '0' + dy : dy;
    hr = hr < 10 ? '0' + hr : hr;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;
    return '' + yr + mm + dd + hr + min + sec;
}

console.log(timestamp());
module.exports =  {
    'key':new Buffer(`${payment.BusinessShortCode}${credentials.lnm_key}${timestamp()}`).toString("base64"),
    'timestamp':timestamp()
}