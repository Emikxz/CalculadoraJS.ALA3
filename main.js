const prompt = require("./prompt.js");
const suma = require("./suma.js");
const resta = require("./resta.js");
const multiplicacion = require("./multi.js");
const division = require("./division.js");

console.log("CALCULADORA / APLICANDO LO APRENDIDO 3\n");

const num1 = parseFloat(prompt("Ingrese el primer número: "));
const num2 = parseFloat(prompt("Ingrese el segundo número: "));
let result; 
let op;
do {
console.clear();
console.log("\n\nOPERACIONES: ");
console.log("Sumar (+)");
console.log("Restar (-)");
console.log("Multiplicar (*)");
console.log("Dividir (/)");
console.log("Salir (s)\n");
op = prompt("Ingrese la operación a realizar: ");

switch (op) {
    case "+": 
        result = suma(num1, num2);
        console.log(`\nEl resultado de la suma es: ${result}`);
        prompt("\nPresione Enter para continuar...");
        break;
    case "-":
        result = resta(num1, num2);
        console.log(`\nEl resultado de la resta es: ${result}`);
        prompt("\nPresione Enter para continuar...");
        break;
    case "*":
        result = multiplicacion(num1, num2);
        console.log(`\nEl resultado de la multiplicación es: ${result}`);
        prompt("\nPresione Enter para continuar...");
        break;
    case "/": 
        result = division(num1, num2);
        console.log(`\nEl resultado de la división es: ${result}`);
        prompt("\nPresione Enter para continuar...");
        break;  
    case "s":
    case "S":
        console.log("Saliendo de la calculadora...");
        break;
    default:
        console.log("Operación no válida. Intente de nuevo.");
        prompt("\nPresione Enter para continuar...");
}
}while (op !== "s" && op !== "S")