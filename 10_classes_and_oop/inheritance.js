class User{
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor (username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course has been added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@google.com", "123abc");
console.log(chai);
chai.addCourse();

const masalaChai = new User("MasalaChai");

masalaChai.logMe();
chai.logMe();

console.log(chai instanceof Teacher);
console.log(chai instanceof User);