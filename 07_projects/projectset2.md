## Solution to project 1

```javascript
console.log("My second Project is BMI Calculator.");

const form = document.querySelector('form');
//The below code will you empty value
//const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = ` First Please give a valid Height ${height}`;
  }else if(weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = ` Second Please give a valid Weight ${weight}`;
  }
  else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    //Show results
    results.innerHTML = `<span>BMI:- ${bmi}</span>`;
  }
})

```