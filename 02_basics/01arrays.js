//array
const myArr = [0, 1, 2, 3, 4, 5];//Here 0,1,2,3,4,5 are elements of the array "myArr".
console.log(typeof myArr);//array is a non primitive datatype whose type is an object.
//Acessing elements of an array:->
console.table([myArr[0], myArr[1], myArr[2], myArr[3], myArr[4], myArr[5]]);
const myHeroes = ["intelligence","curious","patience"];
const myArr2 = new Array(11, 12, 13, 14);

// Array Methods
//1.push
myArr.push(6);
myArr.push(7);
console.log(myArr);
//2.pop
myArr.pop();
console.log(myArr);
myArr.pop();
//3.unshift
myArr.unshift(8);
console.log(myArr);
//4.Shift
myArr.shift();
console.log(myArr);

//Questioner in Js in arrays.
//includes
console.log(myArr.includes(6));
console.log(myArr);
//index
console.log(myArr.indexOf(9));//When the number is not present in the index it gives -1 as result.
console.log(myArr.indexOf(2));
console.log(myArr);
// join :- converts array to a string.
const newArr = myArr.join();
console.log(newArr);
console.log(typeof newArr);

//Slice, Splice

console.log("A ",myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1);

console.log("B ",myArr);
const myn2 = myArr.splice(1,3);
console.log("C ",myArr);
console.log(myn2);
//Splices affects the original array whereas slice don't