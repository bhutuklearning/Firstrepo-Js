//Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); 
// Date is an Object datatype.

let myCreateDate = new Date(2023, 0, 23);
console.log(myCreateDate.toDateString());
let findDate = new Date(2023, 0, 23, 5, 3);
console.log(findDate.toLocaleString());
let findDate01 = new Date("01-14-2023");
console.log(findDate01.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(myCreateDate.getTime());
console.log(Date.now());
console.log(Math.floor(Date.now()/1000));//TimeStamp

let newDate = new Date();
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getMonth()); //Month index starts from zero.
console.log(newDate.getMonth() +1) ;
console.log(newDate.getDate());
 
console.log(`${newDate.getDate()} is the date today.`);


console.log(newDate.toLocaleString('default', {
    weekday : "long" ,
    // timeZone : 
}))
