const frase = prompt("Por favor introduce una frase:");
let vocalesEncontradas = "";  //Declaro la variable vocalesEncontradas para guardar las vocales (let xq pueden cambiar)

//Utilizo un for para que recorra la fase ingresada y el length para que sepa cuantos caracteres tiene la frase
// toLowerCase lo convierte en minuscula

for (let i = 0; i < frase.length; i++) {
  const caracter = frase.charAt(i).toLowerCase();
  if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
    vocalesEncontradas += caracter +' '; //aqui lo que hago es  ir concatenando las variables encontradas y tambien un espacio para que quede mas prolijo
  }
}

document.write('Las vocales encontradas en la frase son :' ,vocalesEncontradas);