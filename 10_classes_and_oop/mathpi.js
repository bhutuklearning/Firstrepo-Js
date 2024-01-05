// Object.getOwnPropertyDescriptor(Math)

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);
console.log(Math.ceil(Math.PI));

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

const chai = {
    name: "Masala Chai",
    price: 500,
    isAvailable: true,
    orderchai: function(){
        console.log(`Order Chai: Chai nahi bani.`);
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false,
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for(let [key, value] of Object.entries(chai)){
    if( typeof value !== "function") {
        console.log(`${key} : ${value}`);
    }
   
}

Object.defineProperty(Math, "PI", {
    writable: true,
   
})

const check = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(check);