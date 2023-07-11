//1. Word vs Keyword
//-->The word which has a meaning in Js is called Keyword and the word which has no declared meaning and act as a normal word in Js is called Word.
//Keyword meaning and usecase has alreay been declared in the language, for example in Js for,if,etcetra are keywords.

//2.Variable and constants:- The entity whose value remains same throughout the program is called Constant and the entity whose value changes is called variable.
//There are three ways to declare a variable in Js which are var, let and const. Another simple way to understand variables are:-
//In order to store and use data in the program we use variables such that we can use it and access it according to our use.

var dulha = "Richu";
var dulhan = "Pikachu";
dulha = "Bulbasor";
//After writing the variable in var we can rewrite the value of the variable but in case of Const we cannot rewrite the value of the variable.
const duniya ="bhagwan";
const nothing = "kuch nhi.";
//In case of const no rewriting the value 
console.log(dulha + " weds " + dulhan);
console.log(duniya+ " ke bina "+ nothing);

//3.Var let const 
//From above I am clear about the difference between var and const but what is the difference var and let?
//There are mainly three difference between var and let. Find it out and document here.[Note:- There are mainly three differences between var and let but there are more differences between it.]

//4.--HOISTING--
//->>Hoisting means the variables are used above the declaration of the code. In Js, functions and variables are hoisted which means declaration is done on the top of the code.
console.log(a);
var a =15;
//Well in console it is written that the value is undefined which means it is not throwing an error,i.e, undefined is also a value. And hoisting is possible in Javascript.
//Now what is the difference between undefined and not defined. In case of undefined variable is declared or exists in the program and in case of not-defined variable does not exists or it is not declared.

//5.TYPES in JS :- Primitive and Reference
// primitive = number, string, null, undefined, boolean
// reference = [] () {} :-> Generally brackets are observed in reference.
// Aisi koi bhi value jisko copy karne par real value copy nhi hota, bss main value ka reference pass ho jata  h , aur usse hum reference value kehte h,
// aur jisko copy karne par real value copy ho jaay wo value primitive type value hoti h.

var a =[12,13] ;
var b = a;
b.pop();
console.log(a,b);
//The upper one is an example of reference type.

//6.Conditionals - if, else, else-if, ternary operator and switch case.
let z = 12, y = 15;
if(z>y) {
    console.log(z);
}
else {
    console.log(y);
}

let u=13, v=14, w=15;
if(u>v && u>w) {
    console.log(u +" is greater among all the numbers");
}
else if(v>w){
    console.log(v +" is greater among all the numbers");
}
else{
    console.log(w + " is greater among all numbers");
}
// So for now conditionals are done and if, else, else-if.

//7.LOOPS :- for, while, do-while //Simple meaning of loops are to repeat itself for a certain period of time and sometimes repeats itself for infinite amount of time.
for(let j=1; j<=10; j++) {
    console.log(j);
}
let i=1;
while(i<=10) {
    console.log(i);
    i++;
}
//8.FUNCTIONS :=> Functions are a block of code which can be used mutiple times.
//Functions mainly 3 kaam ke liye use hota h->
//a) Jab aap apna code abhi nhi chalana chathe aur future mein chalana chahte ho.
//b) Jab aap apna code reuse karna chahte ho.
//c) Jab aap apna code chalana chahte ho with different data.

//Functions can be created in 3 types in ES5 and it can also be created in 3 types in ES6.

function hellobolo() {
    console.log("Hello");
}
hellobolo();
//Aguments and parameters
function abcd(e, f, g, h){   //In this line a, b, c and d are parameters.
    console.log(e, f, g, h);
}
abcd(12, 13, 14, 15); // In this line 12, 13, 14, 15 are arguments passed to the parameters of the function abcd.

//In short Arguments are the real values which we pass to the functions. And Parameters are the variables which store the values passed in the form of arguments in the function call.


//9.ARRAYS :- collection of similar elements of same type. //Generally Arrays are used to store more than one value in a variable which normal variable cannot.
let array = [1, 2, 3, 4, 5]; // example of declaration of an array.

//10. Push, Pop, Shift and Unshift
var arr = [1, 2, 3, 4, 6, 5];
arr.push(8);
console.log(arr);
var pop = [33, 34, 35, 35, 36];
pop.pop();
console.log(pop);

var Shi_ft = [11, 12, 13, 14, 15];
Shi_ft.shift();
console.log(Shi_ft);

var unshi_ft = [21, 22, 23, 24, 25];
unshi_ft.unshift(20);
console.log(unshi_ft);

//SPLICE = going to know the application of splice in an array. It just removes an element from anywhere in an array.
var spl = [41, 42, 43, 44, 45];
spl.splice(2,1);     //Here 2 belongs to the index number and 1 refers to the number of values to be removed from the index.
console.log(spl);

var spl_ice = [2, 3, 4, 25, 29, 31];
spl_ice.splice(1,3);
console.log(spl_ice);

//Ek se jyada banda ki baat hui to array, ek hi bande ke bare mein saaari baat hui to OBJECT.// In other way : Object hai  ek  hi bande ke bare mein saari baatein hold karna, in a key value pair.

//11. OBJECTS :-
//1) Blank Object
var e = {};
//2) Filled Object
var f = {
    name : "Amrit",
    age : 19 ,
    qualification : "BTech",
    email : "email.email@emil.com",
}
//The above example of the filled object demonstrate the details about a single variable. Here the name of the object is f and now we will find out
//how to access the object.
console.log(f.age);// Accessing the object by the method objectname.details

//12. Props Vs Methods
var f = {
    name : "Amrit",
    age : 19 ,
    qualification : "BTech",
    email : "email.email@emil.com",
}
//Here in the object f, [name, age, qualification, email] are the properties of the object f.
//Then What is "Method" ? Ek aisi property jiski value function ho.
var f = {
    name : "Amrit",
    age : 19 ,
    qualification : "BTech",
    email : "email.email@emil.com",
    Abilities : function() {}         //Now Abilities is a method, as it becomes a property which has a function value
}
//13. Updating Object Properties.
f.age = 20;
console.log(f);


//The basics part of the Js(in two parts) by Shreyians Coding School(Youtube) is completed.