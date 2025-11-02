let num1 = parseInt(prompt("Ingresa el primer número"));
let num2 = parseInt(prompt("Ingresa el segundo número"));
let num3 = parseInt(prompt("Ingresa el tercer número"));


// Encontrar el mayor
let mayor = num1;         // Inicializamos el mayor como: num1

if (num2 > mayor) {       // Comparamos num2 con el "mayor"
    mayor = num2;
}

if (num3 > mayor) {       // Comparamos num3 con el nuevo "mayor"
    mayor = num3;
}
console.log("El número mayor es: " + mayor);

// Encontrar el menor
let menor = num1;         // Inicializamos el menor como: num1

if (num2 < menor) {       // Comparamos num2 con el "menor"
    menor = num2;
}

if (num3 < menor) {       // Comparamos num3 con el nuevo "menor"
    menor = num3;
}
console.log("El número menor es: " + menor);

// Comparamos si hay numeros iguales
if (num1 === num2 && num2 === num3) {   // Si los tres son iguales
    console.log("Los 3 números son iguales");
} else {
    if (num1 === num2) {               // Si solo num1 y num2 son iguales
        console.log("El primero y el segundo son iguales");
    } else {
        console.log("El primero y el segundo no son iguales");
    }

    if (num2 === num3) {               // Si solo num2 y num3 son iguales
        console.log("El segundo y el tercero son iguales");
    } else {
        console.log("El segundo y el tercero no son iguales");
    }

    if (num1 === num3) {               // Si solo num1 y num3 son iguales
        console.log("El primero y el tercero son iguales");
    } else {
        console.log("El primero y el tercero no son iguales");
    }
}
