const userEmail = "email@email.com";

if (userEmail) {
    console.log("Got user Email.");
}
else{
    console.log("Don't have user Email.");
}
//falsy values :-> 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
//All values except falsy values are truthy values.
//Truthy Values :->
//"0", 'false', " ", [], {}, function(){} 

//How to check if an array is empty or not.
const userArray = [];
if(userArray.length ===0) {
    console.log("Empty Array.");
}

//How to check if an object is empty or not.
const userObject = {};

if(Object.keys(userObject).length === 0) {
    console.log("Empty Object.");
}
//Object.keys(userObject) will return an array.

//Try the below codes in console.
// false == 0 :> returns true
// false == '' :> returns true
// 0 == '' :> returns true

// Nullish Coalescing Operator (??): null undefine

let val1;
// val1 = 5 ?? 10 //returns:-> 5
// val1 = null ?? 10; //returns:-> 10
// val1 = undefined ?? 15; //returns:-> 15
val1 = null ?? 25 ?? 50;  //returns:-> 25
console.log(val1);

//Ternary Operator

//condition ? true : false ;
const coldCoffeePrice = 100;
(coldCoffeePrice >= 85) ? console.log("more than 85"): console.log("less than 85");