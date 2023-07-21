//const tinderuser = new Object();//Singleton object
const tinderuser = {}

tinderuser.id = "123abc";
tinderuser.name = "Sammaira";
tinderuser.isLoggedIn = false;

console.log(tinderuser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname: "Bhutuk",
            lastname : "Learning",
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);

//Merging two objects.
const obj1 = {1: "a", 2:"b", 3:"c"};
const obj2 = {4: "d", 5: "e", 6:"f"};

const obj3 = Object.assign(obj1, obj2);
console.log(obj3);
const obj4 = Object.assign({}, obj1, obj2); //more recom
console.log(obj4);
//more recom:-> more recommended.
//Another method apart from assign

//Spread Method.
const obj5 = {...obj1,...obj2};//widely used
console.log(obj5);

const users = [
    {
        id : 1,
        email :"user1@gmail.com"
    },
    {
        id : 2,
        email :"user2@gmail.com"
    },
    {
        id :3,
        email : "user3@gmail.com"
    }
];
users[1].email;
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggedIn'));
console.log(tinderuser.hasOwnProperty('isLogged'));