//Javascript is Dynamically typed language and Typescript is static typed language.

// Dynamically typed means we don't have to declare the type(like number, strings). For example, while declaring a variable "const score = 100" we don't have  to declare the datatype. Whereas in TypeScript we have to declare the datatype like "const score:number = 10;" 


// There are two types of datatypes:- Primitive and Non-Primitive

//Primitive datatypes are of 7 types :- (call by value) 
//strings, Numbers, boolean, null(khali), undefined, Symbols, BigInt
const score = 100;
const scoreValue = 101.4;

const isLogged = false;
const Temp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log( id === anotherId);

const bigNumber = 34562178934521789n ;//ending with n represents bigInt;

// Non-Primitive(Reference) datatypes:- (call by references)
// Arrays, Objects, Functions

const heroes = ["Shaktimann", "naagraj", "doga"];
console.log(heroes);
const obj = {
    language : "js",
    famous: true ,
    application : "wide range",
};
console.log(obj);

const myFunction = function() {
    console.log("Hello World from myFunction variable");
};
myFunction();

//How to know the datatype of any function ?
//using "typeof" function
console.log(typeof bigNumber);
console.log(typeof Temp);
console.log(typeof id);
const hii = undefined ;
console.log(typeof hii);
console.log(typeof undefined);
console.table([typeof myFunction, typeof scoreValue, typeof obj, typeof heroes]);

//For further reading
// https://262.ecma-international.org/5.1/#sec-11.4.3

//-------++++++++**************
// Memories
// There are two types of memories :- Stack{Primitive} and Heap{Non-primitive or Reference}

//Incase of primitive type stack memory is used.
//Incase of non-primitive or reference type heap memory is used.

//Static Memory example
let mygitaccount = "bhutuklearning";
let anotherName = mygitaccount ;
anotherName = "gitandgithub";

console.log(mygitaccount);
console.log(anotherName);

//Heap Memory example(which uses references)
let userOne ={
    email: "email@email.com",
    upi: "user@ybl",
}

let userTwo = userOne;
userTwo.email = "email2@email.com" ;
console.log(userOne.email);
console.log(userTwo.email);