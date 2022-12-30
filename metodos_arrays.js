//AGREGAR ELEMENTOS A UN ARRAY USANDO PUSH

let usuarios = ["Carlos", "Pedro", "José", "Felipe"];

let nuevoCliente = "Fabián";

let result = usuarios.push(nuevoCliente);  //push retorna la cantidad de elementos con la que quedo el array
console.log(result)

console.log(usuarios); // output: [ 'Carlos', 'Pedro', 'José', 'Felipe', 'Fabián' ]


let nuevoCliente2 = "Pedrito";
let nuevoCliente3 = "Carlitos";

usuarios.push(nuevoCliente2, nuevoCliente3);
console.log(usuarios);