// fetch('https://something.js').then().catch().finally()
//Creating a Promise
const promiseOne = new Promise(function(resolve, reject){
    //Do an Async Task
    //DB calls, cryptograpghy, network call
    setTimeout(function(){
        console.log("Async Task Completed.");
        resolve();
    }, 1000);
  
});
//Resolve is directly connected to then()
promiseOne.then(function(){
    console.log("Promise Consumed.");
});

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2.");
        resolve();
    }, 2000);

}).then(function(){
    console.log("Async Two Resolved");
});

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve( {username: "chai", email: "email@example.com"} );
    }, 3000);
});

promiseThree.then(function(user){
    console.log(user);
});

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error) {
            resolve({username: "Bhutuk", password: "123"});
        }else{
            reject("Error: Something went wrong.");
        }
    },4000);
});

promiseFour
.then( (user)=> {
    console.log(user);
    return user.username
}).then( (username)=> {
    console.log(username);
}).catch( function(error){
    console.log(error);
}).finally( ()=> {
    console.log("The promise is either resolved or rejected.");
});

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error) {
            resolve({username: "JavaScript", password: "1234"});
        }else{
            reject("Error: Javascript went wrong.");
        }
    },5000);
});

async function consumePromiseFive(){
   try{
    const response =  await promiseFive;
    console.log(response);
   }
   catch(error) {
    console.log(error);
   }
}

consumePromiseFive();


// async function getAllUsers() {
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");

//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error) {
//         console.log("Error: ", error);
//     }
// }

// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=> {
    return response.json();
}).then( (data) => {
    console.log(data);
})
.catch( (error) => {
    console.log(error);
})