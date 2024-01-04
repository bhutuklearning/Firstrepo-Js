let myName = "Bhutuk     ";

console.log(myName.length);
console.log(myName.trim().length);

let myHeroes = ["batman", "spiderman"];

let heroPower ={
    batman : "fist",
    spiderman : "sling",

    getSpiderPower: function(){
        console.log(`Spidy Power is ${this.spiderman}`);
    }
}

Object.prototype.bhutuk = function() {
    console.log("Bhutuk is present in every Objects.");
}

Array.prototype.heybhutuk = function() {
    console.log("Bhutuk says Hello.");
}

heroPower.bhutuk();
myHeroes.bhutuk();
myHeroes.heybhutuk();

// Inheritance
const user = {
    name: "Chai",
    email: "email@google.com",
}

const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false,
}

const TASupport = {
    makeAssignment: "Js",
    fulTime: true,
    __proto__: TeachingSupport,
}

Teacher.__proto__ = user;

// modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode    ";

String.prototype.trueLength = function() {
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"Bhutuk".trueLength();
"ChaiaurCoffee".trueLength();