function validar_campos() {
    // Obtener los elementos del formulario por su ID
    var nombreUsuario = document.getElementById('nombre_usuario_input');
    var contraseña = document.getElementById('contraseña_input');
    var mensajeError_1 = document.getElementById('mensaje_error');
    var mensajeError_1 = document.getElementById('mensaje_error');

    // Limpio el mensaje de error previo
    mensajeError_1.textContent = '';
    mensajeError_2.textContent = '';

    // Verifico si los campos están vacíos
    if (nombreUsuario.value === '') {
        mensajeError_1.textContent = 'Por favor, ingrese su nombre de usuario.';
        return false; // Detener la ejecución si hay error
    }

    if (contraseña.value === '') {
        mensajeError_2.textContent = 'Por favor, ingrese su contraseña.';
        return false;// Detener la ejecución si hay error
    }

    // Si ambos campos están completos
    alert('Formulario enviado correctamente');
    return true;
}

function Limpiar_campo() {
    // Obtener los elementos usando getElementById en vez de getElementsByClassName
    var nombreUsuarioInput = document.getElementById('nombre_usuario_input');
    var contraseñaInput = document.getElementById('contraseña_input');
    var mensajeError_1 = document.getElementById('mensaje_error');
    var mensajeError_2 = document.getElementById('mensaje_error');

    // Limpiar los campos
    nombreUsuarioInput.value = '';  // Limpia el campo de nombre de usuario
    contraseñaInput.value = '';  // Limpia el campo de contraseña
    mensajeError_1.textContent = '';  // Limpia el mensaje de error
    mensajeError_2.textContent = '';  // Limpia el mensaje de error
}
