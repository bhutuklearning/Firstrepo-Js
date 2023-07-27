//for of 
//["", "", ""]
//[{}, {}, {}]

const arr01 = [1, 2, 3, 4, 5];

for (const num of arr01) {
    console.log(num);
}

const greetings = "Hello World";
for (const greet of greetings) {
    console.log(`Each Character is ${greet}`);
}
//Maps are Objects known for holding unique values not repitative values and it remembers the original value order of the keys.
//Maps
const map = new Map();
map.set('IN', "India");
map.set('USA', "United Sates of America");
map.set('FR', "France");

console.log(map);

for (const key of map) {
    console.log(key);
}
//Proper way of writing using keys and values.
for (const [key, value] of map) {
    console.log(`${key} :-> ${value}`);
}

const myObj = {
    email : "em@email.com",
    replies: 2,
    sent: 1,
}
// for (const key of myObj) {
//     console.log(key);
// }

//Note:->In For Of loop, Maps are iterable and won't throw error and objects are not iterable in for of loop.Therefore while iterating objects it will throw an error in the console/Terminal.

