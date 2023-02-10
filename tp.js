

//Corrobora que el id ingresado este en la lista.
function productoSeleccionado(numeroId) {
    if (numeroId <= 5) {
        return numeroId
    } else {
        return alert("El producto seleccionado no existe.")
    }
}
let nombre_usuario = prompt("Ingresá tu nombre de usuario:");
let edad = prompt("Ingresa tu edad: ");
let direccion = prompt("Ingresa tu direccion")

class usuarioNuevo {
    constructor(usuario, edad) {
        this.nombre_usuario = usuario;
        this.edad = edad;
        this.direccion = direccion;
    }
    get_datos() {
        console.log("-->Datos del usuario<--")
        console.log("Nombre:", this.nombre_usuario);
        console.log("Edad:", this.edad);
        console.log("Direccion:", this.direccion);
    }


}
let usuario = new usuarioNuevo(nombre_usuario, edad, direccion)
//Pide Datos de usuario y devuelve por consola.

let productos = [
    { id: 1, nombre: "Gabinete gamer", precio: 30000 },
    { id: 2, nombre: "Memoria ram 8gb", precio: 12000 },
    { id: 3, nombre: "Mouse", precio: 6000 },
    { id: 4, nombre: "Procesador ryzen 7", precio: 108000 },
    { id: 5, nombre: "Teclado", precio: 10000 },

]





let totalProductos = 0;
let producto = "";
let otroProducto = "";
let continuarCompra = "";
let precioFinal = 0;


//Inicia la compra.
while (continuarCompra != "n") {
    producto = prompt("Seleccione un producto de la lista: \n 1.Gabinete gamer ($30000) \n 2.Memoria ram 8gb. ($12000) \n 3.Mouse. ($6000) \n 4.Procesador ryzen 7 ($108000) \n 5.Teclado ($10000)");
    //Convierte lo ingresado por prompt en number.
    let numeroId = parseInt(producto);
    //Filtrado de productos.
    function buscarProducto(producto) {
        return producto.id == numeroId
    }

    let resultado_find = productos.find(buscarProducto);
    if (productoSeleccionado(numeroId)) {
        console.log("El producto seleccionado es: ", resultado_find);
        //Acumulador de precio final.
        precioFinal = precioFinal += resultado_find.precio;
        //Contador de productos.  (maximo 3)
        totalProductos = totalProductos += 1;
        if (totalProductos === 3) {
            console.log("El carrito esta lleno!")
            break;
        }
    }
    //Continua la compra.
    if (continuarCompra != "n") {
        continuarCompra = prompt("Desea otro producto? s/n")
        if (productoSeleccionado(otroProducto)) {
            otroProducto = prompt("Seleccione un producto de la lista: \n 1.Gabinete gamer ($30000) \n 2.Memoria ram 8gb. ($12000) \n 3.Mouse. ($6000) \n 4.Procesador ryzen 7 ($108000) \n 5.Teclado ($10000)");
            //Convierte lo ingresado por prompt en number.
            let numeroId = parseInt(otroProducto);
            //Filtrado de productos.
            function buscarProducto(otroProducto) {
                return otroProducto.id == numeroId
            }

            let resultado_find = productos.find(buscarProducto);
            if (productoSeleccionado(numeroId)) {
                console.log("El producto seleccionado es: ", resultado_find);
                //Acumulador de precio final.
                precioFinal = precioFinal += resultado_find.precio;
                //Contador de productos. (maximo 3)
                totalProductos = totalProductos += 1;
                if (totalProductos === 3) {
                    console.log("El carrito esta lleno!")
                    break;
                }

            }
        }
    }

    else {

    }
}
usuario.get_datos()
console.log("Precio final: $", precioFinal)
console.log("Total de productos en el carrito: ", totalProductos)
console.log(nombre_usuario, ", Gracias por su compra.")
