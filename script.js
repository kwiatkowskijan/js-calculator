function clear() {
    var calcElement = document.getElementById("calc");
    var resultElement = document.getElementById("result");

    console.log(calcElement);
    calcElement.innerHTML = "";
    resultElement.innerHTML = "";
}

function addNumber(number) {
    var calcElement = document.getElementById("calc");
    
    if (calcElement.innerHTML == undefined) {
        calcElement.innerHTML = number;
    } else {
        calcElement.innerHTML = calcElement.innerHTML + number;
    }
}