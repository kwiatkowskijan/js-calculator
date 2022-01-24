function clearCalculation() {
    document.getElementById("calc").textContent = "";
    clearResult();
}

function clearResult() {
    document.getElementById("result").textContent = "";
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
    if (calcElement.textContent != undefined && calcElement.textContent.length >= 23) {
        document.getElementById("result").textContent = "To many chars";
        return;
    }

    if (calcElement.textContent != undefined && calcElement.textContent.length > 0) {
        var lastChar = calcElement.textContent.substring(calcElement.textContent.length - 1);
        if (isOperationCharacter(lastChar) && isOperationCharacter(character)) {
            backspace();
        }
    }

    //add char to calc element
    if (calcElement.textContent == undefined) {
        calcElement.textContent = character;
    } else {
        calcElement.textContent = calcElement.textContent + character;
    }
}


function calculateResult() {
    var calcValue = document.getElementById("calc").textContent;

    if (calcValue != undefined && calcValue.length > 0 && isOperationCharacter(calcValue.substring(calcValue.length - 1))) {
        backspace();
        calcValue = document.getElementById("calc").textContent;
    }

    if (calcValue != undefined && calcValue.length > 0) {
        var result = eval(calcValue);
        if (result == Number.POSITIVE_INFINITY || Number.isNaN(result) || result == Number.NEGATIVE_INFINITY) {
            result = "Invalid calc";
        }
        document.getElementById("result").textContent = result;
    }
}

function backspace() {
    var calcValue = document.getElementById("calc").textContent;
    clearResult();

    if (calcValue != undefined && calcValue.length > 0) {
        document.getElementById("calc").textContent = calcValue.substring(0, calcValue.length - 1);
    }
}

function easteregg() {
    document.getElementById("result").textContent = "This is useless :)";
    document.getElementById("calc").textContent = "";
}