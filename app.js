/*
Calcular el total de una compra de macetas en el vivero.

Guardar en una constante el precio de una maceta que es de 2500
Solicitar al usuario su nombre y la cantidad de macetas que quiere comprar. Guardar cada dato en variables.
Calcular el total a pagar y guardar este total en una nueva variable.
Mostrar el resultado en la consola con una ventana emergente que diga “Hola <nombre>, el total de tu compra es <precio total>” */


const PRECIO_MACETA= 2500

let nombreUsuario= prompt("Decime tu nombre")
let cantMacetas= Number(prompt("Cantidad Macetas que deseas comprar"))

let totalCompra= PRECIO_MACETA*cantMacetas

console.log("Hola "+ nombreUsuario+ " el total de tu compra es "+totalCompra)

alert("Hola "+ nombreUsuario+ " el total de tu compra es "+totalCompra)
