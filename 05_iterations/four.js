const myObject = {
    js : "Javascript",
    cpp: "C++",
    rb : "Ruby",
    swift:"Swift by Apple",
}
//for in loop
for(const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
// for(const [key, value] in myObject) {
//     console.log(`${key} refers to ${value}`);
// }

const programming = ["c", "js", "rb", "py", "java", "cpp"];

for(const key in programming) {
    console.log(`${key} :-> ${programming[key]}`);
}

// const map = new Map();
// map.set('IN', "India");
// map.set('USA', "United Sates of America");
// map.set('FR', "France");

// for(const key in map) {
//     console.log(key);
// }
//The code from line number 21 to 26 doesn't work because maps in general are not iterative.