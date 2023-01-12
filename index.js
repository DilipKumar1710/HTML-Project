const onSubmitDetails = document.getElementById("onSubmitDetails");
const leftValue = document.getElementById("leftValue");
const operatorSign = document.getElementById("operator")
const rightValue = document.getElementById("rightValue");
const result = document.getElementById("result");
let value;
let right;
let left;

function rightzero(left, operator, right) {
    if (operator === "+") {
        value = left + right
        result.textContent = value
    }
    else if (operator === "-") {
        value = left - right
        result.textContent = value
    }
    else if (operator === "*") {
        value = left * right
        result.textContent = value
    }
    else if (operator === "/") {
        value = parseInt(left / right)
        result.textContent = value
    }
}

function rightone(left, operator, right) {
    if (operator === "+") {
        value = left + right
        result.textContent = value
    }
    else if (operator === "-") {
        value = left - right
        result.textContent = value
    }
    else if (operator === "*") {
        value = left * right
        result.textContent = value
    }
    else if (operator === "/") {
        value = parseInt(left / right)
        result.textContent = value
    }
}

function righttwo(left, operator, right) {
    if (operator === "+") {
        value = left + right
        result.textContent = value
    }
    else if (operator === "-") {
        value = left - right
        result.textContent = value
    }
    else if (operator === "*") {
        value = left * right
        result.textContent = value
    }
    else if (operator === "/") {
        value = parseInt(left / right)
        result.textContent = value
    }
}

function rightthree(left, operator, right) {
    if (operator === "+") {
        value = left + right
        result.textContent = value
    }
    else if (operator === "-") {
        value = left - right
        result.textContent = value
    }
    else if (operator === "*") {
        value = left * right
        result.textContent = value
    }
    else if (operator === "/") {
        value = parseInt(left / right)
        result.textContent = value
    }
}

function rightfour(left, operator, right) {
    if (operator === "+") {
        value = left + right
        result.textContent = value
    }
    else if (operator === "-") {
        value = left - right
        result.textContent = value
    }
    else if (operator === "*") {
        value = left * right
        result.textContent = value
    }
    else if (operator === "/") {
        value = parseInt(left / right)
        result.textContent = value
    }
}

function rightfive(left, operator, right) {
    if (operator === "+") {
        value = left + right
        result.textContent = value
    }
    else if (operator === "-") {
        value = left - right
        result.textContent = value
    }
    else if (operator === "*") {
        value = left * right
        result.textContent = value
    }
    else if (operator === "/") {
        value = parseInt(left / right)
        result.textContent = value
    }
}

function rightnine(left, operator, right) {
    if (operator === "+") {
        value = left + right
        result.textContent = value
    }
    else if (operator === "-") {
        value = left - right
        result.textContent = value
    }
    else if (operator === "*") {
        value = left * right
        result.textContent = value
    }
    else if (operator === "/") {
        value = parseInt(left / right)
        result.textContent = value
    }
}

function rightzero(left, operator, right) {
    if (operator === "+") {
        value = left + right
        result.textContent = value
    }
    else if (operator === "-") {
        value = left - right
        result.textContent = value
    }
    else if (operator === "*") {
        value = left * right
        result.textContent = value
    }
    else if (operator === "/") {
        value = parseInt(left / right)
        result.textContent = value
    }
}

function rightzero(left, operator, right) {
    if (operator === "+") {
        value = left + right
        result.textContent = value
    }
    else if (operator === "-") {
        value = left - right
        result.textContent = value
    }
    else if (operator === "*") {
        value = left * right
        result.textContent = value
    }
    else if (operator === "/") {
        value = parseInt(left / right)
        result.textContent = value
    }
}

function rightzero(left, operator, right) {
    if (operator === "+") {
        value = left + right
        result.textContent = value
    }
    else if (operator === "-") {
        value = left - right
        result.textContent = value
    }
    else if (operator === "*") {
        value = left * right
        result.textContent = value
    }
    else if (operator === "/") {
        value = parseInt(left / right)
        result.textContent = value
    }
}

function plus(left, operator) {
    right = parseInt(rightValue.value)

    if (right === 0) {
        rightzero(left, operator, right)
    }
    else if (right === 1) {
        rightone(left, operator, right)
    }
    else if (right === 2) {
        righttwo(left, operator, right)
    }
    else if (right === 3) {
        rightthree(left, operator, right)
    }
    else if (right === 4) {
        rightfour(left, operator, right)
    }
    else if (right === 5) {
        rightfive(left, operator, right)
    }
    else if (right === 6) {
        rightsix(left, operator, right)
    }
    else if (right === 7) {
        rightseven(left, operator, right)
    }
    else if (right === 8) {
        righteight(left, operator, right)
    }
    else if (right === 9) {
        rightnine(left, operator, right)
    }

}

function minus(left, operator, right) {
    right = parseInt(rightValue.value)

    if (right === 0) {
        rightzero(left, operator, right)
    }
    else if (right === 1) {
        rightone(left, operator, right)
    }
    else if (right === 2) {
        righttwo(left, operator, right)
    }
    else if (right === 3) {
        rightthree(left, operator, right)
    }
    else if (right === 4) {
        rightfour(left, operator, right)
    }
    else if (right === 5) {
        rightfive(left, operator, right)
    }
    else if (right === 6) {
        rightsix(left, operator, right)
    }
    else if (right === 7) {
        rightseven(left, operator, right)
    }
    else if (right === 8) {
        righteight(left, operator, right)
    }
    else if (right === 9) {
        rightnine(left, operator, right)
    }

}

function times(left, operator, right) {
    right = parseInt(rightValue.value)

    if (right === 0) {
        rightzero(left, operator, right)
    }
    else if (right === 1) {
        rightone(left, operator, right)
    }
    else if (right === 2) {
        righttwo(left, operator, right)
    }
    else if (right === 3) {
        rightthree(left, operator, right)
    }
    else if (right === 4) {
        rightfour(left, operator, right)
    }
    else if (right === 5) {
        rightfive(left, operator, right)
    }
    else if (right === 6) {
        rightsix(left, operator, right)
    }
    else if (right === 7) {
        rightseven(left, operator, right)
    }
    else if (right === 8) {
        righteight(left, operator, right)
    }
    else if (right === 9) {
        rightnine(left, operator, right)
    }

}

function dividesBy(left, operator, right) {
    right = parseInt(rightValue.value)

    if (right === 0) {
        rightzero(left, operator, right)
    }
    else if (right === 1) {
        rightone(left, operator, right)
    }
    else if (right === 2) {
        righttwo(left, operator, right)
    }
    else if (right === 3) {
        rightthree(left, operator, right)
    }
    else if (right === 4) {
        rightfour(left, operator, right)
    }
    else if (right === 5) {
        rightfive(left, operator, right)
    }
    else if (right === 6) {
        rightsix(left, operator, right)
    }
    else if (right === 7) {
        rightseven(left, operator, right)
    }
    else if (right === 8) {
        righteight(left, operator, right)
    }
    else if (right === 9) {
        rightnine(left, operator, right)
    }

}

function leftzero(left) {
    let operator = operatorSign.value

    if (operator === "+") {
        plus(left, operator)
    }
    else if (operator === "-") {
        minus(left, operator)
    }
    else if (operator === "*") {
        times(left, operator)
    }
    else if (operator === "/") {
        dividesBy(left, operator)
    }
}

function leftone(left) {
    let operator = operatorSign.value

    if (operator === "+") {
        plus(left, operator)
    }
    else if (operator === "-") {
        minus(left, operator)
    }
    else if (operator === "*") {
        times(left, operator)
    }
    else if (operator === "/") {
        dividesBy(left, operator)
    }
}

function lefttwo(left) {
    let operator = operatorSign.value

    if (operator === "+") {
        plus(left, operator)
    }
    else if (operator === "-") {
        minus(left, operator)
    }
    else if (operator === "*") {
        times(left, operator)
    }
    else if (operator === "/") {
        dividesBy(left, operator)
    }
}

function leftthree(left) {
    let operator = operatorSign.value

    if (operator === "+") {
        plus(left, operator)
    }
    else if (operator === "-") {
        minus(left, operator)
    }
    else if (operator === "*") {
        times(left, operator)
    }
    else if (operator === "/") {
        dividesBy(left, operator)
    }
}

function leftfour(left) {
    let operator = operatorSign.value

    if (operator === "+") {
        plus(left, operator)
    }
    else if (operator === "-") {
        minus(left, operator)
    }
    else if (operator === "*") {
        times(left, operator)
    }
    else if (operator === "/") {
        dividesBy(left, operator)
    }
}

function leftfive(left) {
    let operator = operatorSign.value

    if (operator === "+") {
        plus(left, operator)
    }
    else if (operator === "-") {
        minus(left, operator)
    }
    else if (operator === "*") {
        times(left, operator)
    }
    else if (operator === "/") {
        dividesBy(left, operator)
    }
}

function leftsix(left) {
    let operator = operatorSign.value

    if (operator === "+") {
        plus(left, operator)
    }
    else if (operator === "-") {
        minus(left, operator)
    }
    else if (operator === "*") {
        times(left, operator)
    }
    else if (operator === "/") {
        dividesBy(left, operator)
    }
}

function leftseven(left) {
    let operator = operatorSign.value

    if (operator === "+") {
        plus(left, operator)
    }
    else if (operator === "-") {
        minus(left, operator)
    }
    else if (operator === "*") {
        times(left, operator)
    }
    else if (operator === "/") {
        dividesBy(left, operator)
    }
}

function lefteight(left) {
    let operator = operatorSign.value

    if (operator === "+") {
        plus(left, operator)
    }
    else if (operator === "-") {
        minus(left, operator)
    }
    else if (operator === "*") {
        times(left, operator)
    }
    else if (operator === "/") {
        dividesBy(left, operator)
    }
}

function leftnine(left) {
    let operator = operatorSign.value

    if (operator === "+") {
        plus(left, operator)
    }
    else if (operator === "-") {
        minus(left, operator)
    }
    else if (operator === "*") {
        times(left, operator)
    }
    else if (operator === "/") {
        dividesBy(left, operator)
    }
}


const onSubmitNumbers = event => {
    event.preventDefault();
    const left = parseInt(leftValue.value)

    if (left === 0) {
        leftzero(0)
    }
    else if (left === 1) {
        leftone(1)
    }
    else if (left === 2) {
        lefttwo(2)
    }
    else if (left === 3) {
        leftthree(3)
    }
    else if (left === 4) {
        leftfour(4)
    }
    else if (left === 5) {
        leftfive(5)
    }
    else if (left === 6) {
        leftsix(6)
    }
    else if (left === 7) {
        leftseven(7)
    }
    else if (left === 8) {
        lefteight(8)
    }
    else if (left === 9) {
        leftnine(9)
    }
}

onSubmitDetails.addEventListener('submit', onSubmitNumbers);