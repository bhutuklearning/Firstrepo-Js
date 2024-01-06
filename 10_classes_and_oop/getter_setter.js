class User{
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        this._email =  value;
    }

    get password() {
        // return this._password.toUpperCase();
        return `${this._password}bhutuk`;
    }
    set password(value) {
        this._password = value;
    }
}

const bhutuk = new User("bhutuk@greatdeveloper.com", "abc");

console.log(bhutuk.password, bhutuk.email);