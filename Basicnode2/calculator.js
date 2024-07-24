process.ergv
const operation = process.argv[2];
let x = process.argv[3];
let y = process.argv[4]



            //  ADDITION 

if(operation === "sum"){
    sum(Number(x), Number(y))
}
function sum(x,y){
    console.log(x + y)
}

        //  Substraction

if(operation === "sub"){
    sub(Number(x), Number(y))
}
function sub(x,y){
    console.log(x - y);
}

    //    Multiplication

    if(operation === "multi"){
        multi(Number(x), Number(y))
    }
    function multi(x,y){
        console.log(x * y);
    }

            // Divition

if(operation === "divi"){
    divi(Number(x), Number(y))
}
function divi(x,y){
    console.log(x / y);
}


if(operation === "sin"){
    sin(Number(x))
}
function sin(x){
    console.log(Math.sin(x));
}



if(operation === "cos"){
    cos(Number(x))
}
function cos(x){
    console.log(Math.cos(x));
}




if(operation === "tan"){
    tan(Number(x))
}
function tan(x){
    console.log(Math.tan(x));
}

        // Random No. Generation


const {randomBytes, } = require('node:crypto');
randomBytes(400, (err, buf) => {
    if(err) throw err
        console.log(`${buf.length} random data${buf.toString('binary')}`);
})