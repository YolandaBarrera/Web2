// Generar un codigo QR
//Tengo un evento, esa info la pasa por un form. Es más fácil hacerlo por un navegador.
function generarQR(){
let input1 = document.getElementById(`input1`).value.trim();
// trim sirve para eliminar los espacios en blanco al inicio y al final del texto
let input2 = document.getElementById(`input2`).value.trim();
let input3 = document.getElementById(`input3`).value.trim();
let input4 = document.getElementById(`input4`).value.trim();

//concatenar el texto completo
let textoCompleto = input1+ ""+ input2+ ""+ input3+ ""+input4;

if(textoCompleto === ""){
    alert("Ingresa el texto para generar el QR");
}

// Para generar solo 1 código QR:
let contenedor = document.getElementById('qr-code');

// Validamos si ya hay un QR generado
if (contenedor.querySelector('img.qr-code')) {
    alert("Ya se generó un QR");
    return; 
}

// Copiamos la dirección de la API
let qrCodeURL= "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="+encodeURIComponent(textoCompleto);
// No es lo mismo una URL, que una URI

// Creamos una imagen
let qrImg = document.createElement('img');

qrImg.src=qrCodeURL;

qrImg.alt= "Un codigo QR";

console.log(qrImg.src);

// Agregar el elemento dentro del div qrCode
qrImg.classList.add('qr-code');
document.getElementById('qr-code').appendChild(qrImg); 
}