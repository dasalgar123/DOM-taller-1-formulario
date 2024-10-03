// Función para crear y obtener las variables del DOM
function crearVariables() {
    return {
        nombreUsuarioInput: document.getElementById('nombre_usuario_input'),
        contraseñaInput: document.getElementById('contraseña_input'),
        mensajeErrorNombre: document.getElementById('mensaje_error_nombre'),
        mensajeErrorContraseña: document.getElementById('mensaje_error_contraseña')
    };
}

// Verifica si el nombre de usuario está vacío
function ingresarDatoNombreUsuario() {
    var elementos = crearVariables();
    if (elementos.nombreUsuarioInput.value === '') {
        elementos.mensajeErrorNombre.textContent = 'Por favor, ingrese su nombre de usuario.';
        return false;
    }
    return true;
}

// Verifica si la contraseña está vacía
function ingresarDatoContraseña() {
    var elementos = crearVariables();
    if (elementos.contraseñaInput.value === '') {
        elementos.mensajeErrorContraseña.textContent = 'Por favor, ingrese su contraseña.';
        return false;
    }
    return true;
}

// Limpiar mensajes de error de nombre de usuario
function limpiarMensajeErrorNombre() {
    var elementos = crearVariables();
    elementos.mensajeErrorNombre.textContent = '';
}

// Limpiar mensajes de error de contraseña
function limpiarMensajeErrorContraseña() {
    var elementos = crearVariables();
    elementos.mensajeErrorContraseña.textContent = '';
}
// Validar el formulario completo
function validarCampos() {
    // Limpiar los mensajes de error previos
    limpiarMensajeErrorNombre();
    limpiarMensajeErrorContraseña();

    // Verificar si los campos están vacíos
    if (!ingresarDatoNombreUsuario() || !ingresarDatoContraseña()) {
        return false; // Detener la ejecución si hay error
    }

    // Si ambos campos están completos
    alert('Formulario enviado correctamente');
    return true;
}


// Limpiar todos los campos y mensajes de error
function limpiarCampos() {
    var elementos = crearVariables();
    
    // Limpiar los campos
    elementos.nombreUsuarioInput.value = '';  // Limpia el campo de nombre de usuario
    elementos.contraseñaInput.value = '';  // Limpia el campo de contraseña

    // Limpiar los mensajes de error
    limpiarMensajeErrorNombre();
    limpiarMensajeErrorContraseña();
}

// Función principal que se ejecuta al cargar la página o al hacer clic en el botón de "Entrar"
function main() {
    // Agregar el evento de clic al botón "Entrar"
    document.getElementById('btn_Entrar').addEventListener('click', function() {
        // Llamar a la función de validación de campos
        validarCampos();
    });
    
    // Agregar el evento de clic al botón "Limpiar"
    document.getElementById('btn_Limpiar').addEventListener('click', function() {
        // Llamar a la función de limpieza de campos
        limpiarCampos();
    });
}

// Llamar a la función principal cuando la página se haya cargado
window.onload = main;
