function clearCalculation() {
    document.getElementById("calc").innerHTML = "";
    clearResult();
}

function clearResult() {
    document.getElementById("result").innerHTML = "";
}

function isOperationCharacter(character) {
    if (character === '+' || character === '-' || character === '*' || character === '/' || character === '.') {
        return true;
    }
    return false;
}

function addChar(character) {
    var calcElement = document.getElementById("calc");
    clearResult();

    //input data validation
    if (calcElement.innerHTML != undefined && calcElement.innerHTML.length >= 23) {
        document.getElementById("result").innerHTML = "Za dużo znaków";
        return;
    }

    if (calcElement.innerHTML != undefined && calcElement.innerHTML.length > 0) {
        var lastChar = calcElement.innerHTML.substring(calcElement.innerHTML.length - 1);
        if (isOperationCharacter(lastChar) && isOperationCharacter(character)) {
            backspace();
        }
    }

    //add char to calc element
    if (calcElement.innerHTML == undefined) {
        calcElement.innerHTML = character;
    } else {
        calcElement.innerHTML = calcElement.innerHTML + character;
    }
}


function calculateResult() {
    var calcValue = document.getElementById("calc").innerHTML;

    if (calcValue != undefined && calcValue.length > 0 && isOperationCharacter(calcValue.substring(calcValue.length - 1))) {
        backspace();
        calcValue = document.getElementById("calc").innerHTML;
    }

    if (calcValue != undefined && calcValue.length > 0) {
        var result = eval(calcValue);
        if (result == Number.POSITIVE_INFINITY || Number.isNaN(result) || result == Number.NEGATIVE_INFINITY) {
            result = "Niedozwolone działanie";
        }
        document.getElementById("result").innerHTML = result;
    }
}

function backspace() {
    var calcValue = document.getElementById("calc").innerHTML;
    clearResult();

    if (calcValue != undefined && calcValue.length > 0) {
        document.getElementById("calc").innerHTML = calcValue.substring(0, calcValue.length - 1);
    }
}