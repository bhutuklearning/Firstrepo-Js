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

//++++Function Part Two++++++
//...rest operator and spread operator.
//Now ... is a rest operator.
function calculateCartPrice(...num1) {
    return num1;
}
console.log(calculateCartPrice(300, 400, 620));

const user = {
    username: "Bhutuk",
    price : 700,
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);
handleObject({
    username: "Sammy",
    price: 650,
});

const myNewArray = [120, 350, 480, 510];

function handleArray(getArray) {
    return getArray[2];
}

console.log(handleArray(myNewArray));
console.log(handleArray([74, 229, 321, 463]));