//Calculator should countain 10 clickable elements (from 0 - 9)
//Calculator should countain a clickable element (equal sign)
//Calculator should countain 4 clickable element (add-substract-multiply-divide)
//Calculator should countain a clickable element (decimal)
//Calculator should countain a clickable element (clear)

//clicking on each button
//get value of button
//calculate answers
//clear the answer field



//clicking on each button
/*window.onload = function() {
  var butt = document.querySelector('#button');
  var result = document.querySelector('#results');
  

    document.addEventListener('click', function(event){
      if(event.target.nodeName == "BUTTON") {
        var value = event.target.innerHTML;

        if(value === '=') {

          results.innerHTML = parseInt(results.innerHTML);
        }else {
        results.innerHTML += value;
        }
      }
    }, false);
};*/

function Calculate() {
  var a = document.querySelector('#button').value;
  var b = document.querySelector('#results').value;
  var operation = document.querySelectot('#operation').value;
  var calculate;

  document.addEventListener('click', function(event){
    if(event.target.nodeName == "BUTTON") {
      var value = event.target.innerHTML;


  if(operation == "+"){
    calculate = a + b;
  } else if(operation == "-") {
    calculate = a - b;
  } else if(operation == "/") {
    calculate = a / b;
  }else if(operation == "x") {
    calculate = a * b;
  }

  console.log(calculate);
}

