//Singleton

//object literals

//Object.create :-> constructor method,i.e, issi ke aandar singleton banta hai.

const mySym = Symbol("Key1");

const jsuser = {  //object literals
    name: "Amritanshu",
    "full name": "bhutuklearning",
    [mySym]: "mykey1",
    age: 19,
    location: "West Bengal",
    email: "email@email.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Tuesday", "Friday"],
};

// Accessing elements of an object through usual and unappropreiate method.
console.log(jsuser.isLoggedIn);
//Another method
console.log(jsuser["email"]);
//Why .(dot) method is not appropreiate to access the keys of an object? look below for an example.
//console.log(jsuser.full name);
console.log(jsuser["full name"]);

//symbol
console.log(jsuser[mySym]);
console.log(typeof jsuser[mySym]);

//change the value 
jsuser.email = "anotheremail@email.com";
console.log(jsuser.email);
//fix the values of the object to avoid overwrite.
//Object.freeze(jsuser); try out this by uncommenting.
jsuser.isLoggedIn = true;
console.log(jsuser.isLoggedIn);
console.log(jsuser);

jsuser.greeting = function() {
    console.log("Hello Js User");
}

//console.log(jsuser.greeting);
console.log(jsuser.greeting());

jsuser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
}
console.log(jsuser.greetingTwo());