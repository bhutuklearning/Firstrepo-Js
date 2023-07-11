//1. The difference between var, let and const
// Js is a combination of both ES5 and ES6.

//i.var was the keyword to declare a variable in Js in ES5, old Js.
//ii.var function scoped hota h => var apne parent function mein kahi bhi use ho sakta h 
function abcd() {
    for(var i=1; i<12; i++) {
        console.log(i);
    }
    console.log(i);
}
abcd();
//iii.var adds itself to the window object.//Go to the console of the browser and type var var a=12 and then type let b=13 and type window,
//you will see that a=12 adds upto the window. Well it is not good as it exposes a lot of variables and data.

//i.let and const are, the keywords to declare a variable in Js, introduced in ES6, new Js. 
//ii.let and const are braces scoped hota h => 
function efgh() {
    for(let j=1; j<11; j++){
        console.log(j);
    }
    // console.log(j);
}
efgh();
//iii.let and const doesn't adds itself to the window object. 
//Go to the console of the browser and type var var a=12 and then type let b=13 and type window, you will see that a=12 adds upto the window.

//So here i learned the three basic differences between let, var and const And most importantly i learned about Window.

//2. Browser Context API:->  Window Object(refer to advance01.txt for simple idea), Stack and Heap memory.

//3. Stack :-> simple idea ki konsi cheez kaise chalegi.

//4. Heap Memory :-> simple idea ki jitna bhi variables aur data hm bnate h, unhe kahi store to karna padta h, uske liye hota h HEAP memory.

//5. Execution Context :-> Simple idea ki jab bhi hum function chalayenge function khud ka ek imaginary container bna lega 
//                         jismein unki 3 cheeze hongi :-
//i.   Variables
//ii.  functions inside that parent function 
//iii. Lexical Environment of that function 
// Ye jo container hai imaginary isse hum Execution Context kehte hai.
//Lexical Environment tells that what functions can access or what they can't.
//Execution Context is a container where function's code is executed and it is always created whenever a function is called.
// It contains three things variables, functions and lexical environment.
// Lexical Environment hota hai ek chart jismein likha hota h ki aapka particular function ke kin chezzo ko access kar sakta h aur kinko nahi, 
//matlab it hold its scope and scope chain.

function xy() {
    var a=12;
    function yz() {
        var b = 13;
    }
}

//6. How to copy reference values :-> It can be done with the help of "spread" operator.
var ref = [1, 2, 3, 4, 5];
var copy = [...ref] ; //here ... represents spread operator.
console.log(ref);
console.log(copy);

// The above one shows how to copy an array and not to use reference.
copy.pop();
console.log(ref);
console.log(copy);

//Now how to copy an object through "spread" operator.
var obj = {name: "Amritanshu"};
var copyobj = {...obj};
console.log(obj);
console.log(copyobj);
copyobj.name = "Bhutuk";
console.log(copyobj);

//7. Truthy vs Falsy :-> Refer to advance01 text for more details.
if(7) {
    console.log("Hello");
}
else{
    console.log("Heyy");
}

//8. Switch Case
var uvw = 10;
switch(uvw >= 9 && uvw <= 10) {
    case 10: console.log(10);
            break;
    case 11: console.log(11);
            break;
    default: console.log("invalid");
            break;
}

//9. for each, for in, do-while
   //i. Foreach loop sirf array pe chalta h ,i.e, jab bhi tmhare pass array ho to use mein aata hai foreach loop.
    //example of for-each
var arr = [11, 12, 13, 14, 15, 16];

arr.forEach(function(val){
    console.log(val+2);
})
//forEach kabhi bhi by default aapke array mein changes nhi karta wo changes karta h array ki temporary copy par jiske wajah se array hamesha same rehta h.

    //ii. For-in loop :- Objects mein loop karne mein kaam aata h for-in loop.
    //example of for-in loop.

var det = {
    name:"Amrit",
    course:"BTech",
    age: 19,
}

for(var key in det){
    console.log(key);
}

for(var key in det) {
    console.log(det[key]); //way to print the value of the elements inside the object
}

for(var key in det) {
    console.log(key,det[key]);
}

//iii. Do-while loop
let dw = 1;

do{
    console.log("Hello");
    dw++;
}while(dw < 4);

//10. Callback Functions. :-> A part of Asychronous Js
setTimeout( function() {
    console.log("2 Second mein execute hoga");   // The function inside the setTimeout is called Callback Function.
}, 2000); //Time is always in milli-seconds
// Aisa code jo baad mein chalta h usse hm function de dete hai ki jb complete hojaaye to function chalade aur
// function jo hm dete hai wo normal function hi hota hai usse hm call back function kehte h.

//11. What is first class functions? 
    //Js mein ek concept hai jismein ki aap ek function ko as a value use kar sakte ho.

var fn = function() {

}
//or
function xy(a) {
    a();
}

xy(function(){ console.log("Hello"); });
//Try the code from 146 to 150 in console(ctr+shift+j)

//12. How arrays are made behind the scenes. :-> Arrays are type of objects.
var ar = [3, 4, 5, 6, 7];
ar[-1] = 99;
console.log(ar);

//But behind the scenes it is like in this way:
// ar = {
//     0: 3,
//     1: 4,
//     2: 5,
//     3: 6,
//     4: 7,
// }
//Array.isArray([]) ; type this in console.

//13. How to delete properties of an object?
var o = {
    city: "Delhi",
    time: 10,
}
console.log(o);

delete o.time ;
console.log(o);

