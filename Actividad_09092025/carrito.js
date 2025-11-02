const frutas =[];

const fruta = prompt ("Bienvenido al carrito de compras. ¿Que fruta quiere agregar?");

frutas.push(fruta);

while(confirm("¿Quieres agregar otra fruta?")){
    const fruta = prompt("Agrega otra fruta:");
    frutas.push(fruta);
}

console.log("Su lista de compra es:");
for (let fruta of frutas){
    console.log(fruta);
}