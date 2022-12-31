let productos = ["Pan", "Queso", "Empanadas", "Sopaipillas"];
//let copiaProductos = JSON.parse(JSON.stringify(productos));
let copiaProductos = Object.assign([], productos);
copiaProductos[0] = "Marraqueta";

console.log("Productos:", productos);
console.log("Copia:", copiaProductos);

/* TIPO DE DATO PRIMITIVO INMUTABLE */
/* let texto = "Hola mundo";
let copiaTexto = texto;
copiaTexto = "Chao mundo"


console.log("Texto:", texto)
console.log("Copia Texto:", copiaTexto) */

