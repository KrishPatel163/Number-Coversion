const dec2bin = require('./dec2bin.js')

function oct2bin(octal){
    let arr = octal.toString().split('')
    let bin = ""
    arr.forEach(element => {
        bin = bin + dec2bin(element).toString()
    });
    console.log(bin);
}

oct2bin(12)