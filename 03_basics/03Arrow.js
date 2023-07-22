const user = {
    userName: "bhutuk",
    price: 999,

    welcomeMessage : function() {
        console.log(`${this.userName}, welcome to the website.`);
        console.log(this);
    }
}

user.welcomeMessage();
user.userName = "BHUTUK";
user.welcomeMessage();

console.log(this);//go to console and try this code.

//Note:-> Browser ke aandar jo global object hai wo window object hai.

// function chai() {
//     let username = "bhutuk";
//     console.log(this);
//     console.log(this.username);
// }
// chai();

// const chai = function() {
//     let userName = "bhutuk";
//     console.log(this.userName);
// }

const chai = () => {
    let userName = "bhutuk";
    console.log(this.userName);
    console.log(this);
 }
//chai();

//Basic syntax of arrow function
() => {}

// const addTwo = (num1, num2) => {
//     return num1+num2;
// }

//Implicit Return
//const addTwo = (num1, num2) => num1+num2;
const addTwo = (num1, num2) => (num1+num2);

console.log(addTwo(3, 6));
const Ret = () => ({userName:"Bhutuk"});
console.log(Ret());

// const ret = () => {
//     obj = {
//         usecase : "understanding",
//         time: 5,
//     }
// }
// console.log(ret());
//for line 53 to 58: do research that can an object be defined inside an arrow function?