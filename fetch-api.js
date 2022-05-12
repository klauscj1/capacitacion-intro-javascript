function obtenerUsuarioJSONPlaceHolder() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1");
}

// obtenerUsuarioJSONPlaceHolder().then(async (respuesta) => {
//   const data = await respuesta.json();
//   console.log(data);
// });

const obtenerUsuarioJSONPlaceHolderAsync = async () => {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await respuesta.json();
  return data;
};
// obtenerUsuarioJSONPlaceHolderAsync().then((respuesta) => {
//   console.log("respuesta ", respuesta);
// });

obtenerUsuarioJSONPlaceHolderAsync().then((respuesta) => {
  console.log("respuesta -> ", respuesta);
});
