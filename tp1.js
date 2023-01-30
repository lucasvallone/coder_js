function productoSeleccionado(producto) {
    if (producto <= 3) {
        return producto
    } else {
        return alert("El producto seleccionado no existe.")
    }
}

let total = 0;
let producto = "";
let otroProducto = "";
let continuarCompra = "";

let nombre_usuario = prompt("Ingresá tu nombre de usuario:");
console.log("Bienvenido/a: ", nombre_usuario);


while (continuarCompra != "n") {
    producto = prompt("Seleccione un producto de la lista: \n 1.Placa de video. ($10000) \n 2.Memoria ram. ($4000) \n 3.Mouse gamer. ($2000)");
    if (productoSeleccionado(producto)) {
        console.log("El producto seleccionado es: ", producto);
        total = total += 1;
        if (total === 3) {
            console.log("El carrito esta lleno!")
            break;
        }
    }

    
    if (continuarCompra != "n") {
        continuarCompra = prompt("Desea otro producto? s/n")
        if (productoSeleccionado(otroProducto)) {
                otroProducto = prompt("Seleccione un producto de la lista: \n 1.Placa de video. ($10000) \n 2.Memoria ram. ($4000) \n 3.Mouse gamer. ($2000)");
                console.log("El producto seleccionado es: ", otroProducto);


                total = total += 1;
                if (total === 3) {
                    console.log("El carrito esta lleno!")
                    break;
                }

            }

        else {

        }
    }
}
    console.log("Total de productos en el carrito: ", total)
    console.log("Gracias por su compra.")

