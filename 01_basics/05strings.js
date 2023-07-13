const greetings = "Hello, World";
const repoCount = 50;
const name = "Bhutuk";
//console.log(greetings+repoCount+" Value");//not recommended.
// Now we will use interpolation ``
console.log(`Hello my name is ${name} and my repocount is ${repoCount}.`);
//Another Method
const gameName = new String('bhutuk-fc-com');
// Write this above code on console(ctrl+shift+j).
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4);
console.log(newString);
const anotherString = gameName.slice(-5,4);//it can accept negative arguments.
console.log(anotherString);

const newStringOne = "  Bhutuk   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://bhutuk.com/bhutuk%20goutam";

console.log(url.replace('%20', '-'));
console.log(url.includes('bhutuk'));
console.log(url.includes('intelligent'));

//conversion of strings to array.
console.log(gameName.split('-'));