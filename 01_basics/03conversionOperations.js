let score = "33abc";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// Below it is shown that conversion result in Number
// "33" => 33
// "33abc" => NaN (Not a Number)
// null => 0
// true => 1
// undefined => NaN
// "bhutuk" => NaN

let isLoggedIn = 1;
let booleanisLoggedIn = Boolean(isLoggedIn);
console.log(booleanisLoggedIn);

// 1 => true
// 0 => false
// "" => false
// "bhutuk" => true

let someNumber = 44;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// ****Operations*****

let value = 3;
let negValue = -value;
console.log(negValue);

console.table([2+2, 2-2, 2*2, 2**3, 2/2, 2%2]);//2**3:- 2 to the power 3

let str1 = "Hello";
let str2 = " Bhutuk";
let str3 = str1 + str2 ;
console.log(str3);

console.log("1" + 2);
console.log(1+"2");
console.log("1"+2+2);//string pehle hai to pehle hi string mein convert kar diya jayega for reference go to ECMA script.
console.log(1+2+"2");
console.log(typeof(1+2+"2"));
//Don't write confusing as well as messy codes.
console.log( (3+4)*5 % 3);
console.log(true, +true, +"");// not recommended

let num1, num2, num3;
num1 = num2 = num3 = 2;//not recommended 

let gameCounter = 100;
gameCounter++;
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

//go and search about prefix and postfix js mdn

//26/11/23:-> Just New findings to check out for.

console.log(1+2+null);
console.log(1+2+undefined)
console.log(typeof(1+2+null));
console.log(typeof(1+2+undefined));

