class Menu {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = Number(precio);
    }
}
/* function suma (a,b) {a+b}*/

let carrito = []

let usuario = prompt ("Bienvenido a Coffee Way. \nIngrese su Nombre y Apellido").toUpperCase();

for(let i =0 ; i<=2 ;i++){
    let nombre = prompt ("Hola! "+ usuario + "." + " Que cafe desea seleccionar del menu?: \nEspresso ($360) \nAmericano ($380) \nCold Brew($300)").toUpperCase();
    let precio = parseInt(prompt("Ingrese el precio"));

    let producto = new Menu (nombre, precio)
    carrito.push(producto)
}
 //meter un while aca que si selecciona un opcion que no este en el menu o si selecciona la opcion no comprar mas, crear bucle) 

 /* 
carrito.reduce ((acc,elemento) => acc+elemento)
const preciocafe = carrito.map(dato => dato.precio)
*/

let preciofinal = carrito.map(dato => dato.precio).reduce ((acc,elemento) => acc+elemento)
alert ("Precio total a pagar" + " " +"$" + preciofinal + ". Muchas gracias por su compra!")