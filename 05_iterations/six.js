//const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// } );

//console.log(values);
//forEach doesn't return values

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//filter
//filter also takes call back
const newNums = myNums.filter( (num) => num>4 );
//filter returns values unlike forEach
console.log(newNums);

const anotherNums = myNums.filter( (num)=>{
    return num>7;
} );
console.log(anotherNums);

const Numbers = [];
//With forEach to push new elements in an array.
myNums.forEach( (num)=>{
    if(num >= 6) {
        Numbers.push(num);
    }
} );

console.log(Numbers);

const books = [
    {title: "Book One", genre:"Fiction", publish:1981, edition:2004 },
    {title: "Book Two", genre:"Non-Fiction", publish:1984, edition:2006 },
    {title: "Book Three", genre:"Thriller", publish:1987, edition:2007 },
    {title: "Book Four", genre:"Science", publish:1989, edition:2005 },
    {title: "Book Five", genre:"Science", publish:1990, edition:2006 },
];

let userBooks = books.filter( (bk) => bk.genre==="Science" );

userBooks = books.filter( (bk)=> {
    return bk.publish>=1985;//bk.genre ==="Thriller"
 } );
 userBooks = books.filter( (bk)=> {
    return bk.publish>=1985 && bk.genre==="Science";
 } );
console.log(userBooks);
