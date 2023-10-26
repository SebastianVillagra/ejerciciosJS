//Como hablamos de paridad uso int para numeros enteros

const numero = parseInt(prompt("Por favor introduce un número:"));

if (numero % 2 === 0) {
    document.write('El número ',numero, ' es divisible por 2');
} else {
    document.write('El número ',numero, ' no es divisible por 2');
}