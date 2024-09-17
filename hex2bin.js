const dec2bin = require('./dec2bin.js');

const binMap = {
    "A": "1010",
    "B": "1011",
    "C": "1100",
    "D": "1101",
    "E": "1110",
    "F": "1111",
};

function hex2bin(hex){
    let arr = hex.split('')
    bin = ""
    arr.forEach(element => {
        console.log("Element: ", element);
        if(binMap[element]){
            bin = bin + binMap[element]
        }
        else{
            bin = bin + dec2bin(element, 4)
        }
    });
    console.log(bin);
}

hex2bin("1A")
