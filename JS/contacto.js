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

$botonEnviar.addEventListener('click', (evento) => {
    evento.preventDefault();
    console.log(nombre);
    console.log(correo);
    console.log(telefono);
    console.log(mensaje);

    if (nombre === null && correo === null && telefono === null && mensaje === null) {
        alert("Usted no ingreso ningún dato")
        $formularioContacto.reset();
    } else if (nombre === null && correo !== null && telefono !== null && mensaje !== null) {
        alert("No ingreso su nombre")
        $formularioContacto.reset();
    } else if (correo === null && nombre !== null && telefono !== null && mensaje !== null) {
        alert("No ingreso su correo")
        $formularioContacto.reset();
    } else if (telefono === null && correo !== null && nombre !== null && mensaje !== null) {
        alert("No ingreso su telefono")
        $formularioContacto.reset();
    } else if (mensaje === null && correo !== null && telefono !== null && nombre !== null) {
        alert("No ingreso su mensaje")
        $formularioContacto.reset();
    } else {
        if (evento) {
            $formularioContacto.reset();
        }
    } /* else {
        if (nombre !== null && correo !== null && telefono !== null && mensaje !== null) {
            alert("Gracias por diligeciar el formato")
            $formularioContacto.reset();
        }
    } */
});
