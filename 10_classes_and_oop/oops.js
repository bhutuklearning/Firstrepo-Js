// What are object literals

const user = {
    userName: "Bhutuk",
    loginCount: 8,
    signedIn : true,
    getuserDetails: function(){
        // console.log("Got user Details from Database.");
        console.log(`Username: ${this.userName}`);
        console.log(this);
    }
}

console.log(user.userName);
console.log(user.getuserDetails());
console.log(this);

const user2 = {
    userName: "Bhutuk",
    loginCount: 8,
    signedIn : true,
    getuserDetails: function(){
        // console.log("Got user Details from Database.");
        console.log(`Username: ${this.userName}`);
        console.log(this);
    }
}

// Constructor Functions
// new is a constructor function

function Uuser(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function() {
        console.log(`Welcome! ${this.username}`);
    }
    return this;
}

const userOne = new Uuser("Amrit", 12, true);
const userTwo = new Uuser("Bhutuk", 9, false);
// Search about instanceof operator

console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);

