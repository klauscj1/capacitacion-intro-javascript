//****** var, let y const *******
var name = "Claus Chocho";
var constAge = 29;
//console.log("name ", name);

let lastName = "Chocho";
let firstName = "Claus";
const favoriteLanguage = "Javascript";
//console.log(lastName);

lastName = true;

//console.log(lastName);

lastName = 0.98;

//console.log(lastName);

// ******* Scope *******

let petName = "Rocky";

function imprimir() {
  let petName = "Beto";
  console.log(petName);
}

imprimir();

lastName = "Chocho";
//******* TEMPLATE STRING *******
let age = 29;
//console.log("El nombre es " + firstName + " " + lastName + " tiene 29 años");
console.log(`El nombre es ${firstName} ${lastName} tiene ${age} años`);

//******* FUNCIONES *******
// funciones tradicionales

const ajuste = 0.01;

function sumar(numero1, numero2) {
  console.log(`La suma de ${numero1} y ${numero2} es ${numero1 + numero2}`);
}

function restar(numero1, numero2) {
  console.log(`La resta de ${numero1} y ${numero2} es ${numero1 - numero2}`);
}

function multiplicar(numero1, numero2) {
  console.log(
    `La multiplicación de ${numero1} y ${numero2} es ${numero1 * numero2}`
  );
}

function dividir(numero1, numero2 = 1) {
  console.log(`La división de ${numero1} y ${numero2} es ${numero1 / numero2}`);
}

calculadora("sumar", 100, 100);

function calculadora(operacion, numero1, numero2) {
  if (operacion == "sumar") {
    sumar(numero1, numero2);
  } else if (operacion == "restar") {
    restar(numero1, numero2);
  } else if (operacion == "multiplicar") {
    multiplicar(numero1, numero2);
  } else if (operacion == "dividir") {
    dividir(numero1, numero2);
  } else {
    console.error(`La operación ${operacion} no esta soportada`);
  }
}

calculadora("sumar", 10, 8);
calculadora("restar", 10, 8);
calculadora("multiplicar", 10, 8);
calculadora("dividir", 10);
calculadora("potencia", 10, 8);

// arrow functions / funciones de flecha

const potenciar = (potencia, base) => {
  console.log(
    `La potencia en base ${base} y ${potencia} es ${base * potencia}`
  );
};

potenciar(2, 2);

const calculadora2 = (numero1, numero2, operacion) => {
  operacion(numero1, numero2);
};

calculadora2(2, 8, sumar);
calculadora2(2, 8, restar);
calculadora2(2, 8, multiplicar);
calculadora2(2, 8, dividir);
//default params
function showAge(edad = 0) {
  console.log("la edad es: ", edad);
}

const showLastName = (lastName = "") => {
  console.log("lastName : ", lastName);
};

showAge(29);
showLastName();

//******* OBJETOS *******

let persona = {
  nombre: "Claus",
  apellido: "Chocho",
  edad: 29,
  graduado: true,
  titulo: {
    universidad: "UDA",
    nombreTitulo: "Ing. Sistemas",
  },
};

console.table(persona);

//crear una funcion que permita obtener
//el nombre del titulo de la persona

const getNombreTitulo = (objetoPersona) => {
  return objetoPersona.titulo.nombreTitulo;
};

function getNombreTituloTradicional(objetoPersona) {
  return objetoPersona["titulo"].nombreTitulo;
}

console.log(getNombreTitulo(persona));
console.log(getNombreTituloTradicional(persona));

persona.direccion = "Parroquia Santa Ana";
persona.edad = 19;

//console.log("persona -> ", persona);

//desestructuracion de objetos

const { nombre, apellido, titulo } = persona;

console.log("desestructuracion ->", nombre);
console.log("desestructuracion ->", apellido);

console.log("desestructuracion ->", titulo);

const { universidad, nombreTitulo } = titulo;
console.log("desestructuracion titulo ->", universidad);
console.log("desestructuracion titulo ->", nombreTitulo);
// spread operation
let persona2 = { ...persona };

persona2.nombre = "Juan";
persona2.apellido = "Calle";

console.log("persona2 -> ", persona2);
console.log("persona -> ", persona);

const { edad, graduado, direccion, ...resto } = persona;

let persona3 = { edad, graduado, direccion };

console.log("persona3 -> ", persona3);
console.log("resto -> ", resto);

//Objecto constructor

function Casa(precio, ubicacion, pisos, banios) {
  this.precio = precio;
  this.ubicacion = ubicacion;
  this.pisos = pisos;
  this.banios = banios;
}

const casa1 = new Casa(15000, "Santa Ana", 1, 2);
const casa2 = new Casa(25000, "Santa Ana", 2, 3);

console.log("casa1 ", casa1);
console.log("casa2 ", casa2);

// 1- Crear un objeto anidado que contenga informacion sobre un automovil

let automovil = {
  placa: "ABC123",
  marca: "Chevrolet",
  modelo: "Grand Vitara",
  anio: 2016,
  motor: {
    cilindros: 4,
    cilindraje: 1600,
  },
};

console.log("automovil -> ", automovil);
// 2- vamos a crear un funcion tradicional que obtenga el objeto anidado del obejto principal
//mediante spread operation (console.table)

function getMotor() {
  const { motor } = automovil;
  console.log("motor -> ", motor);
}

getMotor();

// 3- vamos a crear funcion de flecha que obtenga la placa del automovil del objeto principal

const getPlaca = () => {
  const { placa } = automovil;
  // const placa = automovil.placa;
  //const placa = automovil["placa"];
  console.log("placa -> ", placa);
};
getPlaca();

//const nombreFuncion = (parametros) => {}

const getColor = () => {
  //...
  return 1;
};

getColor();
