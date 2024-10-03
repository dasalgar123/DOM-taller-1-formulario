// Código Optimizado


// Función para crear y obtener las variables del DOM
function crearVariables() {
    return {
        nombreUsuarioInput: document.getElementById('nombre_usuario_input'),
        contraseñaInput: document.getElementById('contraseña_input'),
        mensajeErrorNombre: document.getElementById('mensaje_error_nombre'),
        mensajeErrorContraseña: document.getElementById('mensaje_error_contraseña')
    };
}

// Verifica si el campo está vacío y muestra el mensaje de error
function validarCampo(input, mensajeError, mensaje) {
    if (input.value === '') {
        mensajeError.textContent = mensaje;
        return false;
    }
    return true;
}

// Limpiar mensajes de error
function limpiarMensajes() {
    const { mensajeErrorNombre, mensajeErrorContraseña } = crearVariables();
    mensajeErrorNombre.textContent = '';
    mensajeErrorContraseña.textContent = '';
}

// Validar el formulario completo
function validarCampos() {
    const elementos = crearVariables();
    limpiarMensajes();

    // Verificar si los campos están vacíos
    if (!validarCampo(elementos.nombreUsuarioInput, elementos.mensajeErrorNombre, 'Por favor, ingrese su nombre de usuario.') ||
        !validarCampo(elementos.contraseñaInput, elementos.mensajeErrorContraseña, 'Por favor, ingrese su contraseña.')) {
        return false; // Detener la ejecución si hay error
    }

    alert('Formulario enviado correctamente');
    return true;
}

// Limpiar todos los campos y mensajes de error
function limpiarCampos() {
    const { nombreUsuarioInput, contraseñaInput } = crearVariables();
    nombreUsuarioInput.value = '';  // Limpia el campo de nombre de usuario
    contraseñaInput.value = '';      // Limpia el campo de contraseña
    limpiarMensajes();               // Limpiar mensajes de error
}

// Función principal que se ejecuta al cargar la página o al hacer clic en el botón de "Entrar"
function main() {
    document.getElementById('btn_Entrar').addEventListener('click', validarCampos);
    document.getElementById('btn_Limpiar').addEventListener('click', limpiarCampos);
}

// Llamar a la función principal cuando la página se haya cargado
window.onload = main;
