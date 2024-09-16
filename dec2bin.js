function dec2bin(x){
    let bin = 0, i = 1
    let count = 1
    while(x != 0){
        // console.log("Step: ", count);
        // console.log(`2 | ${x} | ${x % 2}`);
        // console.log("Step: ", i);
        console.log(`Bin calculation (${bin} + ${x % 2} * ${i}): ${bin + x % 2 * i}`);
        bin = bin + x % 2 * i
        i = i * 10
        x = parseInt(x / 2) 
        // console.log("\n");
        count = count + 1
    }
    return bin
}

// bin = dec2bin(10)
// console.log(bin);

module.exports = dec2bin