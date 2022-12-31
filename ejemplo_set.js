let listado1 = ["Pan", "Queso", "Pan", "Leche", "Queso", "Papas"];
//let listado2 = ["Empanadas", "Sopaipillas"];


let nuevoSet = new Set(listado1)
//nuevoSet.add("Dulces")
console.log(nuevoSet)

//let nuevoArray  = new Array(...nuevoSet);
let nuevoArray = [...nuevoSet]

console.log(nuevoArray);
