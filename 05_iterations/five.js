//for Each loop

const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach( function(item){
    console.log(item);
});
console.log("------");

coding.forEach( (val)=>{
    console.log(`Coding languages are: ${val}.`);
} );
console.log("------");

function printMe(item) {
    console.log(item);
}
coding.forEach(printMe);

coding.forEach( (item, index, arr)=>{
    console.log(item, index, arr);
} )

//Objects inside an array
console.log("------");
const myCoding = [
    {
        languageName: "Javascript",
        languageFile: "js",
    },
    {
        languageName: "Java",
        languageFile: "java",
    },
    {
        languageName: "Python",
        languageFile: "py",
    }
];

myCoding.forEach( (item)=>{
    console.log(item);
} );

myCoding.forEach( (item)=>{
    console.log(item.languageName);
} );
