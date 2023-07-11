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