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
window.onload = function() {
  var butt = document.getElementById('button');
  var result = document.getElementById('results');
  var clear = document.getElementById("ac");

    document.addEventListener('click', function(event){
      if(event.target.nodeName == "BUTTON") {
        var value = event.target.innerHTML;

        if(value === '=') {
          results = parseFloat(results.innerHTML);
        }else {
        results.innerHTML += value;
        }
      }
    }, false);
};




