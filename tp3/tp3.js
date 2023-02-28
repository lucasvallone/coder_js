

carritoCargado = []
//Parsea los productos del localStorage (en caso de haber),sino carga el carrito vacio y renderiza el carrito.
let recProductos = localStorage.getItem("productos");
recProductos = JSON.parse(recProductos);
if (recProductos != null) {
    carritoCargado = recProductos
} else {
    carritoCargado = []
}
renderizarCarrito()
settearEventos()

//crea el producto que va a ser enviado al carrito capturandolo del html
function crearProducto(e) {

    let hijo = e.target
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;

    let nombreProducto = padre.querySelector(".card-title").textContent;
    let precioProducto = parseInt(padre.querySelector("span").textContent);
    let imagenProducto = abuelo.querySelector("img").src;

    let producto = {
        nombre: nombreProducto,
        precio: precioProducto,
        cantidad: 1,
        img: imagenProducto
    }

    return producto
}
//carga los productos en el localStorage
function actualizarLocalStorage() {
    let carritoLocalStorage = JSON.stringify(carritoCargado);
    localStorage.setItem("productos", carritoLocalStorage);
}
//añade productos al carrito si ese producto ya esta aumenta solo la cantidad
function añadirAlCarrito(producto) {

    let productoDuplicado = comprobarDuplicado(producto)

    if (productoDuplicado === true) {

        aumentarCantidad(producto)
    } else {

        carritoCargado.push(producto)
    }
    actualizarLocalStorage()
}
//aumena la cantidad del producto
function aumentarCantidad(producto) {

    for (let productoCarrito of carritoCargado) {
        if (productoCarrito.nombre === producto.nombre) {
            productoCarrito.cantidad++
        }
    }
}
//comprueba si ya hay un producto igual en el carrito
function comprobarDuplicado(producto) {

    for (let productoCarrito of carritoCargado) {

        if (productoCarrito.nombre == producto.nombre) {
            return true
        }
    }
    return false
}

//comprueba si hay un producto ya cargado en el carrito 
function comprobarcantidad(nombreProducto) {

    for (let productoCarrito of carritoCargado) {

        if (productoCarrito.nombre == nombreProducto && productoCarrito.cantidad > 1) {
            return true
        }
    }

    return false
}
//elimina el producto seleccionado o resta uno del carrito
function eliminarDelCarrito(nombreProducto) {

    let cantidadMayorAUno = comprobarcantidad(nombreProducto)
    if (cantidadMayorAUno === true) {
        restarCantidad(nombreProducto)
    } else {

        let eliminarfilter = carritoCargado.filter(function (productoCarrito) {
            return productoCarrito.nombre != nombreProducto
        })

        carritoCargado = eliminarfilter


    }
    actualizarLocalStorage()
}
//vacia el carrito y lo carga en localStorage
function vaciarCarrito() {

    carritoCargado = []

    actualizarLocalStorage()
}
//renderiza los productos en el carrito
function renderizarCarrito() {

    let tabla = document.getElementById("tbody");
    tabla.innerHTML = "";

    for (let producto of carritoCargado) {

        let fila = document.createElement("tr");

        fila.innerHTML = `<td><img src="${producto.img}" width = "100px"</td>
        <td><p>${producto.nombre}</p></td>
        <td>${producto.cantidad}</td>
        <td>$${producto.precio}</td>
        <td><button class ="btn btn-danger borrarProd" id="borrarProd">x</button>`;

        tabla.append(fila);
    }

    let totals = document.getElementById("total");
    let total = getTotalCarrito()
    totals.innerHTML = `<div>$ ${total}</div>`;

    setEventoBorrarProductos()

}
//captura el producto del html y lo borra del carrito
function setEventoBorrarProductos() {
    let borrar = document.querySelectorAll("#borrarProd");
    for (let btn of borrar) {

        btn.addEventListener("click", function (e) {

            let abuelo = e.target.parentNode.parentNode;
            let nombreProducto = abuelo.querySelector("p").textContent;

            eliminarDelCarrito(nombreProducto)
            renderizarCarrito()
        });
    }
}
//resta los productos en caso de haber mas de 1
function restarCantidad(nombreProducto) {
    for (let productoCarrito of carritoCargado) {
        if (productoCarrito.nombre === nombreProducto) {
            productoCarrito.cantidad--
        }
    }
}

//Calcula el total del carrito
function getTotalCarrito() {

    let totalCarrito = 0

    for (let producto of carritoCargado) {
        totalCarrito += producto.precio * producto.cantidad
    }
    return totalCarrito

}
//Setteo todos los botones de la pagina
function settearEventos() {
//captura el boton de comprar
    let compra = document.querySelectorAll("#comprar")
    for (let boton of compra) {
        boton.addEventListener("click", function (e) {
            let producto = crearProducto(e)
            añadirAlCarrito(producto)
            renderizarCarrito()
        });
    }
//capruta el boton de borrar los productos
    setEventoBorrarProductos()
//captura el boton de vaciar el carrito
    let vaciar = document.getElementById("vaciarCarrito")
    vaciar.addEventListener("click", function () {
        vaciarCarrito()
        renderizarCarrito()
    })

    let canasta = document.getElementsByClassName("basket")
    for (let boton of canasta) {

        boton.addEventListener("click", function() {

            let carrito = document.getElementById("carrito")
            if (carrito.style.display != "none"){
                carrito.style.display = "none"
            } 
            else{
                carrito.style.display = "block"
            }
        })
    }
}
