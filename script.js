document.addEventListener("DOMContentLoaded", function () {
    const resultDiv = document.getElementById("results");
    let tempInput = document.getElementById("Temperature");

    function clicked() {
        let temp = parseFloat(tempInput.value); 

        if (isNaN(temp)) {
            resultDiv.innerText = "Please enter a valid number";
        } else if (temp <= 0) {
            resultDiv.innerText = "Very cold";
        } else if (temp >= 1 && temp <= 25) {
            resultDiv.innerText = "Temperature is moderate";
        } else {
            resultDiv.innerText = " Temperature  is Very hot";
        }
    }

    window.clicked = clicked;
});
