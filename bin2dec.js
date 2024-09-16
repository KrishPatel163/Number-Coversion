function bin2dec(x){

    let arr = x.split("")
    
    let dec = 0
    for (let index = 0; index < x.length; index++) {
        bin = parseInt(arr[index])
        if(bin === 0){
            console.log(`${bin}^${index} = ${dec}`);
            continue
        }
        dec += bin * (2 ** (x.length - index - 1));
    }
    return dec
}

let bin = '000'
console.log(bin2dec(bin));

module.exports = bin2dec