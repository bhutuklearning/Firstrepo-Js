const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);
console.log(typeof balance);

console.log(balance.toString());
console.log(balance.toString().length);

console.log(balance.toFixed(2));
console.log(balance.toFixed(1));

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3));
const otherNumber01 = 123.8966;
console.log(otherNumber01.toPrecision(3));
const otherNumber02 = 1123.8966;
console.log(otherNumber02.toPrecision(3));
const otherNumber03 = 123.8966;
console.log(otherNumber03.toPrecision(4));

const hundreds = 1000000;
console.log(hundreds.toLocaleString());//US based stand.
console.log(hundreds.toLocaleString('en-IN'));//IND std.

//++++++++++++Maths++++++++++++++
console.log(Math);
console.log(Math.abs(4));
console.log(Math.abs(-4));
console.log(Math.round(5.54));

console.table([Math.ceil(7.2), Math.floor(7.9)]);

console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 9, 13, 7, 2));

console.log(Math.random());//random function generates value between 0 and 1.
console.log(Math.random()*10);
console.log(Math.round(Math.random()*6));

//Task :- Generate a random number between 1 and 11.
console.log(Math.random()*10+1);
console.log(Math.round((Math.random()*10) +1));

//Task :- Generate a random number between 1 and 10.
console.log(Math.random()*10+1);
console.log(Math.floor((Math.random()*10) +1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+ min);