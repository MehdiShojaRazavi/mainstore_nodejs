const moment = require("moment")
function idGenerator(){
    return moment().format("YYYYMMDDHHmmssSSS") + String(process.hrtime()[1]).padStart(9, 0)
}
function randomNumberGenarator(){
    return Math.floor((Math.random() * 90000) + 10000);
}