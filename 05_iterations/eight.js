//reduce
const myNums = [1,2,3,4];

const myTotal = myNums.reduce( function(acc,currval){
    console.log(`acc:${acc} and currval:${currval}`);
    return acc+currval;
},0);   //try any number other than 0,
console.log(myTotal);

const mynewTotal = myNums.reduce((acc,currval)=>{
    console.log(`acc:${acc} and currval:${currval}`);
    return acc+currval;
},5);  //try any number other than 5
console.log(mynewTotal);

//reduce function in arrow function
const myTotal01 = myNums.reduce((acc,currval)=>
acc+currval, 10);
console.log(myTotal01);

const shoppingCart = [
    {
        itemName : "js course",
        price: 2999,
    },
    {
        itemName : "cpp course",
        price: 1999,
    },
    {
        itemName : "java course",
        price: 2499,
    },
    {
        itemName : "mobile development course",
        price: 5999,
    },
];

const totalshopping = shoppingCart.reduce((acc, item)=> acc + item.price, 0);
console.log(totalshopping);
