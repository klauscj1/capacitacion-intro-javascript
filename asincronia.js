function cargarImagenes() {
  console.log("1. Cargando imagenes... Por favor espera");
  setTimeout(() => {
    console.log("2. Imagenes cargadas");
  }, 5000);
}

function mostrarImagenes() {
  console.log("3. Se han mostrado correctamente las imagenes");
  cachearImages();
}

function cachearImages() {
  console.log("4. cachear Imagenes");
}

function cargarImagenesConCallback(verImagenes) {
  console.log("1. Cargando imagenes... Por favor espera");
  setTimeout(() => {
    console.log("2. Imagenes cargadas");
    verImagenes();
  }, 5000);
}

//cargarImagenes();
//mostrarImagenes();
//cargarImagenesConCallback(mostrarImagenes);

//Promise -> Promesas

const trabajos = [
  { id: 1, trabajo: "Freelance" },
  { id: 2, trabajo: "Docente" },
  { id: 3, trabajo: "Estudiante" },
];

const personas = [
  { id: "1", nombre: "Claus", edad: 20, trabajo_id: 1 },
  { id: "2", nombre: "Xavier", edad: 20, trabajo_id: 1 },
  { id: "3", nombre: "Ivan", edad: 20, trabajo_id: 2 },
  { id: "4", nombre: "Joel", edad: 20, trabajo_id: 3 },
  { id: "5", nombre: "Edisson", edad: 20, trabajo_id: 3 },
];

function obtenerPersona() {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved(personas);
    }, 1000);
  });
}

function buscarTrabajo(idTrabajo) {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      let trabajo = trabajos.find((trabajo) => trabajo.id === idTrabajo);
      resolved(trabajo);
    }, 500);
  });
}

function buscarPersona(idPersona) {
  if (typeof idPersona !== "number")
    return Promise.reject("No se puede mandar textos");
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      let persona = personas.find((persona) => persona.id === idPersona);
      resolved(persona);
    }, 500);
  });
}

obtenerPersona()
  .then((vector) => {
    console.log(vector);
  })
  .catch((e) => {
    console.error(e);
  });
