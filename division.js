function division(num1, num2) {
    if (num2 === 0) {
        return "Error: División por cero no permitida.";
    } else {
        return num1 / num2;
    }
}

module.exports = division;