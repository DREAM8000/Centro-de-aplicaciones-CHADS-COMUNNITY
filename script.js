function openFullScreen(url) {
    document.getElementById('fullscreen-iframe').src = url;
    document.getElementById('fullscreen-overlay').classList.remove('hidden');
}

function closeFullScreen() {
    document.getElementById('fullscreen-overlay').classList.add('hidden');
    // Establecer el src del iframe como una cadena vacía para detener la reproducción del contenido
    document.getElementById('fullscreen-iframe').src = '';
    // Asegurarse de que el botón "Close" esté visible cuando se cierre la pantalla completa
    document.getElementById('close-button').style.display = 'none';
}