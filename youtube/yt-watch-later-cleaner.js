// Almacenamos el intervalo en una variable para poder detenerlo después.
const intervalId = setInterval(() => {
    // Busca el primer video en la lista.
    const video = document.querySelector("ytd-playlist-video-renderer");

    // Si no se encuentran más videos, detiene el script y avisa.
    if (!video) {
        console.log("✅ ¡Proceso completado! No hay más videos en la lista.");
        clearInterval(intervalId);
        return;
    }

    // Busca y hace clic en el botón de menú (tres puntos) de ese video.
    const menuButton = video.querySelector("#button.ytd-menu-renderer");
    if (menuButton) {
        menuButton.click();

        // Espera un momento a que el menú desplegable aparezca.
        setTimeout(() => {
            // ---- CAMBIO PRINCIPAL AQUÍ ----
            // Busca el ícono de bote de basura por su forma única (el atributo 'd' del path SVG).
            const trashIconPath = document.querySelector("path[d='M11 17H9V8h2v9zm4-9h-2v9h2V8zm4-4v1h-1v16H6V5H5V4h4V3h6v1h4zm-2 1H7v15h10V5z']");
            
            // Si encuentra el ícono...
            if (trashIconPath) {
                // Busca el elemento padre que es clickeable ('ytd-menu-service-item-renderer').
                const removeItemButton = trashIconPath.closest('ytd-menu-service-item-renderer');
                if (removeItemButton) {
                    removeItemButton.click();
                    console.log("Video eliminado...");
                }
            }
        }, 500); // 500ms de espera
    }
}, 1500); // 1.5 segundos entre cada eliminación.