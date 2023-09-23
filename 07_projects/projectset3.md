# Solution to Project Number 3

```javascript
console.log("The solution to my project number 3");

const clock = document.querySelector("#clock");

setInterval(function(){
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);//1000 for 1 second

```