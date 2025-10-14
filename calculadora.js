class calculadora { // Con esta clase principal encapsulo todo el funcionamiento de la calculadora
    constructor(prompt) { // El constructor recibe el prompt para interactuar con el usuario
        this.prompt = prompt; // Guarda la dependencia para usarla en los métodos
        this.num1 = NaN;
        this.num2 = NaN;
    }

    // Lee y convierte los valores a numeros para usar en las operaciones con el parse.
    leerNumeros() {
        this.num1 = parseFloat(this.prompt("Ingrese el primer número: "));
        this.num2 = parseFloat(this.prompt("Ingrese el segundo número: "));

    // Valido que los numeros ingresados sean válidos
    while (Number.isNaN(this.num1) || Number.isNaN(this.num2)) {
        console.log("Error: Uno o ambos valores ingresados no son números válidos. Intente de nuevo.");
        this.num1 = parseFloat(this.prompt("Ingrese el primer número: "));
        this.num2 = parseFloat(this.prompt("Ingrese el segundo número: "));
    }   
}

    mostrarMenu() {
        console.clear();
        console.log("\n\nOPERACIONES: ");
        console.log("Sumar (+)");
        console.log("Restar (-)");
        console.log("Multiplicar (*)");
        console.log("Dividir (/)");
        console.log("Salir (s)\n");
    }
    // Pauso para que el usuario presione enter...
    pausar() {
        this.prompt("\nPresione Enter para continuar...");
    }

// Método principal que ejecuta el bucle de la calculadora
ejecutar() {
    const suma = require("./suma.js");
    const resta = require("./resta.js");
    const multiplicacion = require("./multi.js");
    const division = require("./division.js");  
    let result; 
    let op;
    do {
        this.mostrarMenu();
        op = this.prompt("Ingrese la operación a realizar: ");
        switch (op) {   
            case "+": 
                result = suma(this.num1, this.num2);
                console.log(`\nEl resultado de la suma es: ${result}`);
                break;
            case "-":
                result = resta(this.num1, this.num2);
                console.log(`\nEl resultado de la resta es: ${result}`);
                break;
            case "*":
                result = multiplicacion(this.num1, this.num2);
                console.log(`\nEl resultado de la multiplicación es: ${result}`);
                break;
            case "/": 
                result = division(this.num1, this.num2);
                console.log(`\nEl resultado de la división es: ${result}`);
                this.pausar();
                break;  
            case "s":
            case "S":
                console.log("Saliendo de la calculadora...");
                break;
            default:
                console.log("Operación no válida. Intente de nuevo.");
                this.pausar();
        }
    } while (op !== "s" && op !== "S");
    }
}

module.exports = calculadora;








