const bin2dec = require("./bin2dec.js")

const hexMap = {
    '1010': 'A',
    '1011': 'B',
    '1100': 'C',
    '1101': 'D',
    '1110': 'E',
    '1111': 'F'
}

function bin2hex(bin){
    let arr = bin.split('').reverse()
    while(arr.length % 4 !== 0){
        arr.push('0')
    }
    arr.reverse()
    console.log(arr);
    // Make group of 4
    let hex = ""
    let i = 0
    let n = 0
    while(i < arr.length/4){
        binGrp = arr.slice(n, n+4).join('')
        hexMap[binGrp] ? hex = hex + hexMap[binGrp] : hex = hex + bin2dec(binGrp)
        i++
        n = n + 4
    }
    console.log(hex);
}

bin2hex("11111111")