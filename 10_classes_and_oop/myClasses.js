// ES6

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `0101${this.password}abc`;
    }

    changeUserName() {
        return `${this.username.toUpperCase()}`;
    }
}

const chai = new User("chai", "chai@gmail.com", "123");

console.log(chai, "\n", chai.encryptPassword(),  "\n", chai.changeUserName());

//behind the scene
function Nuser(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

Nuser.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

Nuser.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`;
}

const tea = new Nuser("Tea", "tea@gmail.com", "123");

console.log(tea, "\n", tea.encryptPassword(),  "\n", tea.changeUserName());