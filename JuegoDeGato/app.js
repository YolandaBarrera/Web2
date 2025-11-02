//                     JUEGO DE GATO 

let turno = "X"; // indica de quien es el turno actual, empieza con "X"
let juegoActivo = true; // status activo del juego

// Los mensajes que se van a mostrar
const mensaje = document.getElementById("mensaje");

// Cada arreglo representa una línea del tablero que puede ganar
const combinaciones = [
    ["c1", "c2", "c3"], // fila 1
    ["c4", "c5", "c6"], // fila 2
    ["c7", "c8", "c9"], // fila 3
    ["c1", "c4", "c7"], // columna 1
    ["c2", "c5", "c8"], // columna 2
    ["c3", "c6", "c9"], // columna 3
    ["c1", "c5", "c9"], // diagonal principal
    ["c3", "c5", "c7"]  // diagonal inversa
];


// Evento con click, al seleccionar una celda:
for (let i = 1; i <= 9; i++) {
    // Obtenemos cada celda por su id 
    let celda = document.getElementById(`c${i}`);
    // Listener 
    celda.addEventListener("click", function() {

        // Solo permite marcar si la celda está vacía y el juego sigue activo
        if (celda.textContent === "" && juegoActivo) {

            // Coloca la marca (X o O) según el turno actual
            celda.textContent = turno;

            // Verifica si alguien ganó 
            verificarGanador();

            // Cambia el turno
            turno = (turno === "X") ? "O" : "X"; // si era X pasa a O, si era O pasa a X
        }
    });
}

function verificarGanador() {

    // Recorremos todas las combinaciones posibles
    for (let combo of combinaciones) {

        // Obtenemos el contenido de las tres celdas de la combinación
        const [a, b, c] = combo.map(id => document.getElementById(id).textContent);

        // Si las tres celdas son iguales y no están vacías, hay ganador
        if (a && a === b && a === c) {
            mensaje.textContent = `Jugador ${a} gana!`;
            juegoActivo = false; // se termina el juego
            return; 
        }
    }

// Comprobar empate:
// Comprueba si todas las celdas del tablero están llenas
const todasLlenas = Array.from(document.querySelectorAll("td")) // // selecciona todas las celdas de la tabla
// "Array.from" convierte la lista en un arreglo 
                         .every(celda => celda.textContent !== ""); // verifica que no están vacías

// Si todas las celdas están llenas y nadie ganó antes, es un empate:
if (todasLlenas) {
    mensaje.textContent = "¡Empate!";
    juegoActivo = false; // termina el juego
}

}


// Botón para reiniciar el juego
document.getElementById("reiniciar").addEventListener("click", function() {

    // Limpia las celdas
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`c${i}`).textContent = "";
    }

    // Vuelve al primer turno, el de "X"
    turno = "X";

    // Reactiva el juego
    juegoActivo = true;

    // Limpia el mensaje
    mensaje.textContent = "";
});
