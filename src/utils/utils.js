const moment = require("moment")
function idGenerator(){
    return moment().format("YYYYMMDDHHmmssSSS") + String(process.hrtime()[1]).padStart(9, 0)
}