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

//metodo map

const precios = [200, 450, 800, 120, 45];
//aumentar los precios originales en 1.5
const preciosNuevos = precios.map((valor) => {
  return valor * 2.5;
});

console.log("preciosNuevos ", preciosNuevos);

const personas = [
  { id: "1", nombre: "Claus", apellido: "Chocho" },
  { id: "2", nombre: "Xavier", apellido: "Bravo" },
  { id: "3", nombre: "Ivan", apellido: "Pinduisaca" },
  { id: "4", nombre: "Joel", apellido: "Sumba" },
  { id: "5", nombre: "Edisson", apellido: "Juela" },
];

const personasInfoCompleta = personas.map((persona) => {
  const newPersona = {
    ...persona,
    nombreCompleto: `${persona.nombre} ${persona.apellido}`,
  };
  return newPersona;
});

console.log("personasInfoCompleta -> ", personasInfoCompleta);

//metodo filter

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//mostrar los numeros pares del vector numeros

const pares = numeros.filter((valor) => {
  const resto = valor % 2;
  if (resto === 0) {
    return true;
  } else {
    return false;
  }
});

const impares = numeros.filter((valor) => valor % 2 !== 0);

console.log("pares -> ", pares);
console.log("impares -> ", impares);

const personasConNombreConA = personas.filter((persona) => {
  return persona.nombre.includes("a");
});

console.log("personasConNombreConA -> ", personasConNombreConA);

//metodo find

const numeroTres = numeros.find((valor) => {
  return valor === 3;
});

console.log("numeroTres ->", numeroTres);

const personaClaus = personas.find((persona) => persona.nombre === "Claus");
console.log("personaClaus -> ", personaClaus);

//metodo includes

const existeElTres = numeros.includes(3);
console.log("existeElTres -> ", existeElTres);

//metodo reduce
//sumar todos los numeros del vector
const suma = numeros.reduce((acumulador, elemento) => {
  return acumulador + elemento;
}, 0);

console.log("suma -> ", suma);
//Transformar el vector de personas a un objeto como el siguiente:
// {
//   1:{ id: "1", nombre: "Claus", apellido: "Chocho" },
//   2:{ id: "2", nombre: "Xavier", apellido: "Bravo" },
//   3: { id: "3", nombre: "Ivan", apellido: "Pinduisaca" },
// }

const objetoPersonas = personas.reduce((acumulador, persona) => {
  return { ...acumulador, [persona.nombre]: persona };
}, {});

console.log("objetoPersonas -> ", objetoPersonas);
console.log("objetoPersonas[1] -> ", objetoPersonas["Xavier"]);
