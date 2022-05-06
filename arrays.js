const listaVarios = ["Hola", "mundo", "como", "estan"];
const listaComandos = ["select", "where", "limit", "order by"];

console.log(listaVarios.length); //obtener el tamaño
const listaNueva = listaVarios.concat(listaComandos); // para unir arrays
console.log(listaNueva.length);
console.log(listaVarios.length);

console.log(listaVarios.reverse());

const cadenaTexto = "Juan fue a la tienda";
const listaCadenaTexto = cadenaTexto.split("");

console.log(listaCadenaTexto);

listaCadenaTexto.forEach((letra) => {
  console.log("la letra es: ", letra);
});

const listaCadenaTextoA = listaCadenaTexto.filter((letra) => {
  //para filtrar valores de un vector/array que cumplan con una condicion
  if (letra !== "a") {
    return true;
  } else {
    return false;
  }
});

console.log(listaCadenaTextoA);

//Ejercio #1 arrays

//Crear una funcion que reciba como parametro un string
//y retorne un valor booleano el cual indique si el string recibido
//es una palabra palindrome

// Test: oso -> true
// Test: ala -> true
// Test: sol -> false
// Test: 123321 -> true

const isPalindrome = (cadena) => {
  const separacion = cadena.split("");
  const cadenaInvertida = separacion.reverse().join("");
  //   if (cadena === cadenaInvertida) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return cadena === cadenaInvertida;
};

console.log(`La palabra oso es palindrome: ${isPalindrome("oso")} `);
console.log(`La palabra ala es palindrome: ${isPalindrome("ala")} `);
console.log(`La palabra sol es palindrome: ${isPalindrome("sol")} `);
console.log(`La palabra 123321 es palindrome: ${isPalindrome("123321")} `);
