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
  //console.log(petName);
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

function dividir(numero1, numero2) {
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
calculadora("dividir", 10, 8);
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
