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

//++++Object De-Structure++++
const course = {
    coursename : "Js in Hindi",
    price: "999",
    courseInstructor : "Hitesh Choudhary",
}

//course.courseInstructor
//Another method to print the properties of the array.
const {courseInstructor} = course;
const {courseInstructor: Instructor} = course;
console.log(courseInstructor);
console.log(Instructor);

//In React
// const navbar = ({company}) => {

// }
// navbar(company = "Bhutuk");

//API-Application Programming Interfece:-> introduction
//Json Api
// {
//     "name" :"Bhutuk",
//     "courseName" : "Js in Hindi",
//     "price": "free,"
// }

//Go and type this https://api.github.com/users/bhutuklearning to know more about API.

//Sometimes API can be in array form rather than in object form.

[
    {},
    {},
    {}
]
//go and type random user me api