'use strict';

const $nombre = document.getElementById('nombre');
const $correo = document.getElementById('email');
const $telefono = document.getElementById('telephone');
const $mensaje = document.getElementById('mensaje-text');
const $botonEnviar = document.getElementById('enviarMensaje');
const $formularioContacto = document.getElementById("formulario-contacto");

let nombre = null;
let correo = null;
let telefono = null;
let mensaje = null;

$nombre.addEventListener('input', (evento) => {
    nombre = evento.target.value;
});

$correo.addEventListener('input', (evento) => {
    correo = evento.target.value;
});

$telefono.addEventListener('input', (evento) => {
    telefono = evento.target.value;
});

$mensaje.addEventListener('input', (evento) => {
    mensaje = evento.target.value;
})

function resetDatos() {
    nombre = null;
    correo = null;
    telefono = null;
    mensaje = null;
}

$botonEnviar.addEventListener('click', (evento) => {
    evento.preventDefault();
    console.log(nombre);
    console.log(correo);
    console.log(telefono);
    console.log(mensaje);

    if (nombre === null && correo === null && telefono === null && mensaje === null) {
        alert("Usted no ingreso ningún dato")
        resetDatos();
        $formularioContacto.reset();
    }

    if (!nombre || !correo || !telefono || !mensaje) {
        alert("Llene los campos vacíos")
        resetDatos();
        $formularioContacto.reset();
    }

    if (nombre === null && correo !== null && telefono !== null && mensaje !== null) {
        alert("No ingreso su nombre")
        resetDatos();
        $formularioContacto.reset();
    }

    if (correo === null && nombre !== null && telefono !== null && mensaje !== null) {
        alert("No ingreso su correo")
        resetDatos();
        $formularioContacto.reset();
    }

    if (telefono === null && correo !== null && nombre !== null && mensaje !== null) {
        alert("No ingreso su teléfono")
        resetDatos();
        $formularioContacto.reset();
    }

    if (mensaje === null && correo !== null && telefono !== null && nombre !== null) {
        alert("No ingreso su mensaje")
        resetDatos();
        $formularioContacto.reset();
    }

    if (nombre !== null && correo !== null && telefono !== null && mensaje !== null) {
        alert("Formato Diligenciado")
        $formularioContacto.reset();
    }

});
