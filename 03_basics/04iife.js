//Immediately Invoked Function Expression(IIFE)

(function chai() {    //Named IIFE
    console.log(`DB CONNECTED`);
})();

//Syntax:-> ()() :-> 1st () is for function and 2nd () is for execution.
//Global scope ke pollution ko hatane ke liye iife use hua hai.

//Arrow Function 
( ()=> {
    console.log(`DB Connected two.`);
})();//Use semicolon

//Both IIFE are simple IIFE 

( (name)=> {
    console.log(`DB Connected TWO ${name}`);
})("Bhutuk");