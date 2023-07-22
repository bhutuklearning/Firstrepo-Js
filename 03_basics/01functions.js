function sayMyName() {  //Definition of a function
    console.log("Bhutuk");
}
//sayMyName :-> Function reference
sayMyName(); //Function Execution

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}
addTwoNumbers();
addTwoNumbers(5, 6);

const result = addTwoNumbers(9, 7);
console.log("Result: ", result);

function addTwoNumbers2(number1, number2) {
    let res = number1 + number2;
    return res;
}
const result2 = addTwoNumbers2(8, 11);
console.log("Result: ", result2);

function loginUserMessage(username) {
    if(username === undefined) {   //(!undefined)
        console.log("Please enter a username.");
        return
    }
    return `${username} just logged in.`;
}
console.log(loginUserMessage("Bhutuk"));
console.log(loginUserMessage());