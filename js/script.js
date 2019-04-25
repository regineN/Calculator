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
var buttons = document.querySelector("button");
buttons.addEventListener("click", function(nameNumber,NameNumb){
    buttons.innerHTML = '';
});
      

function myDivision() {
    nameNumber = document.getElementById("numberNumber").value;
    nameNumb = document.getElementById("numberNum").value;
    document.getElementById("results").innerHTML = numberNumber / numberNum;

}

function myMultiplication() {
    nameNumber = document.getElementById("numberNumber").value;
    nameNumb = document.getElementById("numberNum").value;
    document.getElementById("results").innerHTML = numberNumber * numberNum;
}

function mySoustraction() {
    nameNumber = document.getElementById("numberNumber").value;
    nameNumb = document.getElementById("numberNum").value;
    document.getElementById("results").innerHTML = numberNumber - numberNum;
}

function myAddition() {
    nameNumber = document.getElementById("numberNumber").value;
    nameNumb = document.getElementById("numberNum").value;
    document.getElementById("results").innerHTML = numberNumber + numberNum;
}




  

