//for
for(let i=0;i<10;i++) {
    if(i==5) {
        console.log("5 is the best number.");
    }
    console.log(`Count ${i+1}`);
}

for (let i=1; i<=10; i++) {
    const element = i;
    if(element==5) {
        console.log("5 is the best number.");
    }
    console.log(element);
}

for(let i=1; i<=5; i++) {
    console.log(`Outer loop value ${i}`);
    for(let j=1; j<=5; j++) {
        console.log(`Inner loop value ${j} and inner loop value ${i}`);
    }
}
//Multiplication Table from 1 to 5.

for(let i=1; i<=5; i++) {
    console.log(`Multiplication table of ${i}`);
    for(let j=1; j<=10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }
    console.log("----------");
}

let myArray = ["Batman", "Spiderman", "Superman"];
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

//break, continue

for (let i=1; i<=10; i++) {
    if(i==5) {
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${i}`);
}

for (let i=1; i<=10; i++) {
    if(i==5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${i}`);
}




