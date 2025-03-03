document.addEventListener("DOMContentLoaded", function () {
    const resultDiv = document.getElementById("results");
    let tempInput = document.getElementById("Temperature");

    function clicked() {
        let temp = parseFloat(tempInput.value); // Get the value and convert it to a number

        if (isNaN(temp)) {
            resultDiv.innerText = "Please enter a valid number";
        } else if (temp <= -273) {
            resultDiv.innerText = "Extremely cold and beyond absolute zero";
        } else if (temp >= -272 && temp <= -125) {
            resultDiv.innerText = "Temperature is Very cold";
        } else if(temp >= -124 && temp <= 0){
            resultDiv.innerText = "cold";
        } else if(temp >=1 && temp <=30){
            resultDiv.innerText = "Morderate temperature";
        } else if(temp >=31 && temp <=50){
            resultDiv.innerText = "Temperature is hot";
        }else{
            resultDiv.innerText = "Extremely hot";
        }
    }

    window.clicked = clicked;
});
