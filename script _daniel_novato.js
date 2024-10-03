// como lo hize yo daniel salinas novato

// Función para obtener los elementos del DOM
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

// Limpiar mensajes de error
function limpiarMensajes() {
    var elementos = crearVariables();
    elementos.mensajeErrorNombre.textContent = '';
    elementos.mensajeErrorContraseña.textContent = '';
}

// Validar el formulario completo
function validarCampos() {
    limpiarMensajes();
    
    var esNombreValido = ingresarDatoNombreUsuario();
    var esContraseñaValida = ingresarDatoContraseña();

    if (!esNombreValido || !esContraseñaValida) {
        return false; // Si hay un error, detener la ejecución
    }

    alert('Formulario enviado correctamente');
    return true;
}

// Limpiar todos los campos y mensajes de error
function limpiarCampos() {
    var elementos = crearVariables();
    elementos.nombreUsuarioInput.value = '';  // Limpia el campo de nombre de usuario
    elementos.contraseñaInput.value = '';      // Limpia el campo de contraseña
    limpiarMensajes();                         // Limpiar mensajes de error
}

// Función principal que se ejecuta al cargar la página o al hacer clic en el botón de "Entrar"
function main() {
    document.getElementById('btn_Entrar').onclick = function() {
        validarCampos();
    };

    document.getElementById('btn_Limpiar').onclick = function() {
        limpiarCampos();
    };
}

// Llamar a la función principal cuando la página se haya cargado
window.onload = main;
