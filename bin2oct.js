const bin2dec = require("./bin2dec.js");

function bin2oct(bin){
    // Take the binary number string and convert it to array and reverse it

    arr = bin.split("")
    arr.reverse() // Reverse the arr to make the group from right to left

    // Find the remaining number and pair it up with 0
    while(arr.length % 3 !== 0){
        arr.push('0')
    }
    console.log("After pushing 0s: ", arr);

    arr.reverse() // Now reverse the arr again to do conversions correctly

    // make the groups 3
    i = 0 // Iterator
    n = 0 // Index specifier
    octal = "" // String to store the octal number
    while(i < arr.length/3){
        binGrp = arr.slice(n, n+3).join('').toString()
        // console.log(`${binGrp}`);
        octal = octal + bin2dec(binGrp)
        n = n + 3
        i++
    }
    return octal
}

console.log(bin2oct("1000"));