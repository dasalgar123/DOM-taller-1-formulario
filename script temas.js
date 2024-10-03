// Variables para los elementos del DOM
const btnCambiarTema = document.getElementById('btnCambiarTema');
const themeStylesheet = document.getElementById('themeStylesheet');

// Inicializar variable para el estado del tema
let temaOscuro = false;

// Función para cambiar el tema
function cambiarTema() {
    temaOscuro = !temaOscuro; // Cambiar el estado del tema
    if (temaOscuro) {
        themeStylesheet.setAttribute('href', 'estilos_oscuros.css');
        btnCambiarTema.textContent = 'Cambiar a Tema Claro'; // Indicar que se puede cambiar a claro
    } else {
        themeStylesheet.setAttribute('href', 'estilos_claros.css');
        btnCambiarTema.textContent = 'Cambiar a Tema Oscuro'; // Indicar que se puede cambiar a oscuro
    }
}

// Lógica de inicialización
if (temaOscuro) {
    themeStylesheet.setAttribute('href', 'estilos_oscuros.css');
    btnCambiarTema.textContent = 'Cambiar a Tema Claro'; // Al cargar en oscuro
}

// Agregar evento al botón para cambiar el tema
btnCambiarTema.addEventListener('click', cambiarTema);
