class User{
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {
        return `1234`;
    }
}

const bhutuk = new User("Bhutuk");
bhutuk.logMe();
// console.log(bhutuk.createId());

class Teacher extends User{
    constructor(username, email) {
        super(username)
        this.email = email;
    }
}

const iphone = new Teacher("Iphone", "Iphone@google.com");
console.log(iphone);
iphone.logMe();