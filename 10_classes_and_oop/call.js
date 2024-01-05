function setUserName(username) {
    //Complex DB calls
    this.username = username;
    console.log("Called");
}

function createUser(username, email, password) {
    setUserName.call(this, username);

    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@example.com", "123");

console.log(chai);