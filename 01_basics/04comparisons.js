console.table([2>1, 2>=1, 2 != 1, 2==1, 2<1, 2<=1]);

console.log("2" > 1); //problematic conversion
console.log("02" > 1); //while comparing values keep in mind that data type of operands will be same.

console.table([ null> 0, null<0, null ==0, null >= 0]);//problematic conversion
console.table([ undefined==0, undefined >0, undefined >=0, undefined <=0 ]);//problematic conversion

// Strict Check or ==== :-> it not only checks the value but also checks the datatypes of the value.
console.log( "2" === 2);
console.log( 2 === 2);