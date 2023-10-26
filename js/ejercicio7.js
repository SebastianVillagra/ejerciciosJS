//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

//Utilizo float para que el usuario pueda ingresar numeros reales tambien

const numero1 = parseFloat(prompt("Por favor introduce el primer número:"));
const numero2 = parseFloat(prompt("Ahora introduce el segundo número:"));
const numero3 = parseFloat(prompt("Por ultimo introduce el tercer número:"));

if (numero1 > numero2 && numero1 > numero3) {
    document.write('El número '+numero1+ ' es el mayor de los tres');
} else if (numero2 > numero1 && numero2 > numero3) {
    document.write('El número '+numero2+ ' es el mayor de los tres');
} else if (numero3 > numero1 && numero3 > numero2) {
    document.write('El número '+numero3+ ' es el mayor de los tres');
} else {
    document.write("Los tres números son iguales");
}