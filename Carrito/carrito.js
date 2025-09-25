// Arreglo de productos iniciales
var productos = [
    {nombre: 'camisa', precio: 300},
    {nombre: 'pantalon', precio: 500},
    {nombre: 'sombrero', precio: 100},
    {nombre: 'zapatos', precio: 400}
];

// Arreglo vacío que representa el carrito
var carrito = [];

// Función para mostrar el menú principal
function mostrarMenu() {
    var opcion; // variable para guardar la opción del usuario

// inicio del bucle, se repite hasta que el usuario elija "salir"
    do {
        var menuProductos = ""; // String vacío que contendrá la lista de productos
        for(var i = 0; i < productos.length; i++) { // itera sobre el arreglo "productos"
            menuProductos += i + ". " + productos[i].nombre + " ($" + productos[i].precio + ")\n";
            // concatena "índice, nombre, precio"  al String "menuProductos"
        }

        // Prompt para menú y pedir opción al usuario
        opcion = parseInt(prompt(
            "Menú de compras:\n" +
            menuProductos + 
            // Funciones dinámicas:
            productos.length + ". Ver carrito\n" +
            (productos.length + 1) + ". Modificar carrito (eliminar)\n" +
            (productos.length + 2) + ". Menú de administrador\n" +
            (productos.length + 3) + ". Salir\n\n" +
            "Elige una opción:"
        ));

        // Si la opción corresponde a un producto
        if(opcion >= 0 && opcion < productos.length) { // si la opción es un índice válido de producto:
            agregarAlCarrito(productos[opcion]);  // agrega al carrito
        } else {
            switch(opcion) { //si no fue índice de producto, evalua las otras opciones
                case productos.length: // ver carrito
                    verCarrito();      // mostrar carrito
                    break;
                case productos.length + 1: // modificar carrito
                    modificarCarrito();    // abrir opción modificar carrito
                    break;
                case productos.length + 2: // menú administrador
                    menuAdministrador();   // abrir menú administrador
                    break;
                case productos.length + 3: // salir
                    alert("Gracias por su compra. ¡Hasta luego!");
                    break;
                default: // opción inválida
                    alert("Opción no válida, intente de nuevo.");
            }
        }

    } while(opcion !== productos.length + 3); // repetir hasta salir
}

// Función para agregar productos al carrito
function agregarAlCarrito(producto) {           // recibe un objeto producto
    carrito.push(producto);                    // agrega al arreglo "carrito"
    alert(producto.nombre + " agregado al carrito.");
}

// Función para ver el carrito
function verCarrito() {
    if(carrito.length === 0) { //si carrito vacío:
        alert("El carrito está vacío.");
    } else {
        var mensaje = "Carrito de compras:\n"; // String para mostrar items
        var total = 0;                         // acumulador del total
        for(var i = 0; i < carrito.length; i++) { // recorre los items del carrito
            mensaje += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
            // concatena cada item al mensaje
            total += carrito[i].precio; // suma el precio al total
        }
        mensaje += "\nTotal: $" + total; // añade el total al mensaje
        alert(mensaje);                  // muestra el mensaje
    }
}

// Función para modificar el carrito 
function modificarCarrito() {
    if(carrito.length === 0) { // si carrito vacío:
        alert("El carrito está vacío, no hay nada que eliminar.");
        return;
    }

    // Prompt de eliminación del producto en el carrito
    var mensaje = "Selecciona el número del producto que deseas eliminar:\n";
    for(var i = 0; i < carrito.length; i++) { // lista los items del carrito
        mensaje += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
    }

    // Pide el número; resta 1 al índice
    var eliminar = parseInt(prompt(mensaje)) - 1;

    if(eliminar >= 0 && eliminar < carrito.length) {   // si índice válido:
        var eliminado = carrito.splice(eliminar, 1);  // splice elimina 1 elemento y devuelve array 
        alert("Se eliminó: " + eliminado[0].nombre + " del carrito."); // muestra que se eliminó
    } else {
        alert("Opción inválida."); // si índice no es válido
    }
}

// Función del menú de administrador
function menuAdministrador() {
    var opcion = prompt(
        "Menú de administrador:\n" +
        "1. Agregar producto\n" +
        "2. Salir\n\n" +
        "Elige una opción:"
    );

    if(opcion === "1") {                 // si el usuario eligió "1"
        var nombre = prompt("Ingresa el nombre del producto:");
        var precio = parseFloat(prompt("Ingresa el precio del producto:"));
        if(nombre && !isNaN(precio)) {  // valida nombre y que precio sea número
            //agrega un nuevo objeto al arreglo 'productos'
            productos.push({nombre: nombre.toLowerCase(), precio: precio});
            alert("Producto agregado correctamente.");
        } else {
            alert("Datos inválidos.");
        }
    } else if(opcion === "2") {  // si eligió "2" salir del menú administrador
        
    } else {                     
        alert("Opción no válida.");
    }
}

// Inicia el programa
mostrarMenu();
