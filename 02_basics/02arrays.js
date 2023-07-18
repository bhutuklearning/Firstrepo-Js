const marvel_heroes = ["Ironman", "Thor", "Spiderman"];
const dc_heroes = ["Superman", "Batman", "Flash"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][0]);

//To merge arrays:-concat
//Concat adds to new arrays whereas push adds to the parent array.
const allHeroes=marvel_heroes.concat(dc_heroes);
console.log(allHeroes);

//Spread 
const all_new_heroes = [...marvel_heroes,...dc_heroes];
console.log(all_new_heroes);

const another_array = [1,2,3,[4, 5, 6],7,[6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);
//isArray
console.log(Array.isArray([1, 11, 111]));
console.log(Array.isArray("Amritanshu"));
//from
console.log(Array.from("Amritanshu"));
console.log(Array.from({name:"Amritanshu"}));//It is an interesting case for an array as it will return an empty array.
//from method will form an array from the passed detail.

//of:-to form an array from the given elements.
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
//"of" is a method to form an array of passed elements.