//Control Flow.
//if

const isUserloggedIn = true;
if (isUserloggedIn) {
    console.log("The user is logged in.")
}
//>,<,>=,<=  :->comparison operators.
// = :-> Assignment operator.
// == :-> Loose Equality check && === :-> Strict Equality check and != :-> not equal to

if(2 == "2") {
    console.log("Executed for loose euality.");
}
if( 2 === "2"){
    console.log("Executed for strict equality.");
}

if(2!=3) {
    console.log("Not equality operator checked.");
}

const temperature = 41;

if(temperature < 50 ) {
    console.log("The temperature is less than 50 deg.");
}
else{
    console.log("Temperature is greater than 50 deg.");
}

const score = 200;
if (score>100) {
    const power = "fly";
    console.log(`Power:${power}`);
}

//Shorthand Technique.
//Or Implicit Scopes.
const balance = 1000;
if( balance>500) console.log("Test");//Implicit scopes

//Multiple lines Implicit Scopes.
if( balance>650) console.log("Test001"),console.log("Test002");//Suggestion: don't use this practice.

//++++Nesting+++++
if(balance<500){
    console.log("Balance is less than 500");
}
else if(balance<800) {
    console.log("Balance is less than 800");
}
else if(balance<1100){
    console.log("Balance is less than 1100");
}

const userLoggedIn = true ;
const debitCard = true ;
const loggedInfromGoogle = false;
const loggedInfromEmail = true ;

if(userLoggedIn && debitCard) {
    console.log("Allowed to purchase.");
}
if(loggedInfromGoogle || loggedInfromEmail) {
    console.log(`User logged in.`);
}