let productos = ["Pan", "Queso", "Empanadas", "Sopaipillas"];
/*

//cliente compró queso y empanadas.

let eliminado = productos.splice(1,2);

console.log("Producto eliminado: ", eliminado);
console.log("Productos restantes", productos)
 */



let productos2 = ["Pan", "Queso", "Empanadas", "Sopaipillas", "Helado", "Jamón"];
/* Cómo se eliminan dos elementos que no estan juntos? como por ejemplo primero y el último*/
/* productos.shift();
productos.pop();
console.log(productos); */

/* Queremos eliminar un producto sin saber su indice / posición
 */

let indiceElemento = productos2.lastIndexOf("Sopaipillas");
console.log(indiceElemento) // output: 3 -> indice de las sopaipillas
let productoEliminado2 = productos2.splice(indiceElemento, 1);
console.log("Producto eliminado: ", productoEliminado2)
console.log("Listado productos", productos2)



//MODIFICAR EL LARGO / CANTIDAD DE ELEMENTOS DE UN ARRAY
productos2.length = 2;
console.log(productos2);
