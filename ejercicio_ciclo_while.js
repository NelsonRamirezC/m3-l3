let numero = 0;
let contador = 0;
numero = prompt("Por favor ingresé el número 3.")

while(numero != 3){ //el while siempre se ejecuta mientras la condicion retorne un verdadero (true)

    console.log("El usuario ingreso el número: ", numero)
    numero = prompt("debe ingresar el número 3!")
    contador++;
    console.log("intento Número: ", contador)
}

console.log("Termino de ciclo:")