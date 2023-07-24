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