var c =300;

if(true) {
    let a =10;
    const b= 20;
    var c = 30;
}
// console.log(a);
// console.log(b);
console.log(c);

let x = 112;

if(true) {
    let x = 10;
    const y = 1024;
    console.log("Inner: ",x);
}
console.log(x);

//+++Nested Scope++

function one() {
    const username = "Bhutuk";

    function two() {
        const website = "Youtube";
        console.log(username);
    }
    // console.log(website);

    two();
}

one();

if(true) {
    const username = "bhutuk";
    if(username === "bhutuk") {
        const website = " youtube";
        console.log(username+website);
    }
    // console.log(website);
}

// console.log(username);

//+++++++++ interesting +++++++
console.log(addOne(11)); //hoisting

function addOne(num) {
    return num+1;
}

const addTwo = function(num) { //it's called expression
    return num+2;
}

console.log(addTwo(12));

//hoisting is done for function call but not for an expression,i.e, a variable which holds the value of the function.