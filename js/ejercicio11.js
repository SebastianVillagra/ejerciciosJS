const numero = parseInt(prompt("Por favor introduce un número:"));
let mensaje = ''; // declaro la variable mensaje como una cadena vacía para luego concatenarla si es divible 

if (numero % 2 === 0) {
  mensaje += '2, ';
}
if (numero % 3 === 0) {
  mensaje += '3, ';
}
if (numero % 5 === 0) {
  mensaje += '5, ';
}
if (numero % 7 === 0) {
  mensaje += '7, ';
}

if (mensaje === '') { //si la variable sigue vacia, quiere decir que no es divisible
  document.write('El número: ' + numero + ' no es divisible por los números 2, 3, 5 ni 7.');
} else {
  
  document.write('El número: ' + numero + ' es divisible por: ' + mensaje);
}
