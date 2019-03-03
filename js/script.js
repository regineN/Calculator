//Calculator should countain 10 clickable elements (from 0 - 9)
//Calculator should countain a clickable element (equal sign)
//Calculator should countain 4 clickable element (add-substract-multiply-divide)
//Calculator should countain a clickable element (decimal)
//Calculator should countain a clickable element (clear)

//clicking on each button
//get value of button
//clear the answer field
window.onload = function() {
    var result = document.getElementById("results");
    var clear = document.getElementById("clear");
    var button = document.getElementById("buttons");

    for(var i = 0; i <= button.length; i++) {
        button[i].click();
    }
};


