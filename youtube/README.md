# YouTube Watch Later Cleaner

Un script simple y robusto para automatizar la eliminación de todos los videos de tu lista "Ver más tarde" de YouTube.

## Descripción

Este script se ejecuta en la consola del desarrollador de tu navegador para limpiar tu lista de reproducción "Ver más tarde" (`youtube.com/playlist?list=WL`). Simula el proceso manual de hacer clic en el menú de cada video y seleccionar la opción "Eliminar", ahorrándote horas de trabajo manual si tienes una lista muy larga.

## Características

- **Automatizado**: Elimina un video cada 1.5 segundos hasta que la lista esté vacía.
- **Robusto**: Identifica el botón de "eliminar" a través del ícono específico del bote de basura, lo que lo hace independiente del idioma de la interfaz de YouTube.
- **Inteligente**: Se detiene automáticamente cuando la lista está vacía y te notifica en la consola.
- **Fácil de usar**: Solo necesitas copiar, pegar y presionar Enter.

---

## Cómo Usar

1.  **Abre "Ver más tarde"**: Navega a tu lista de reproducción [Ver más tarde](https://www.youtube.com/playlist?list=WL) en tu navegador e inicia sesión si es necesario.
2.  **Abre la Consola del Desarrollador**:
    - **Chrome / Edge**: `Ctrl + Shift + J` (Windows/Linux) o `Cmd + Option + J` (Mac).
    - **Firefox**: `Ctrl + Shift + K` (Windows/Linux) o `Cmd + Option + K` (Mac).
3.  **Pega el Script**: Copia el contenido completo del archivo `script.js` y pégalo en la consola.
4.  **Ejecuta**: Presiona la tecla `Enter`.

El script comenzará a funcionar y verás mensajes de `Video eliminado...` en la consola. El proceso finalizará con un mensaje de `¡Proceso completado!`.

### Cómo Detener el Proceso

Si necesitas detener el script antes de que termine, simplemente **recarga la página** o **cierra la pestaña** del navegador.

---

## Detalles Técnicos

El script opera mediante un `setInterval` que ejecuta una serie de acciones cada 1.5 segundos:

1.  Busca el primer video en la lista (`ytd-playlist-video-renderer`).
2.  Si no encuentra videos, limpia el intervalo y se detiene.
3.  Hace clic en el botón de menú (tres puntos).
4.  Espera 500 ms a que aparezca el menú desplegable.
5.  En lugar de buscar texto o una posición, busca el elemento `<path>` del SVG que corresponde al ícono del bote de basura, usando su atributo `d` como un selector único.
6.  Una vez encontrado el ícono, utiliza `.closest('ytd-menu-service-item-renderer')` para encontrar el contenedor principal clickeable y lo presiona.

Este método de selección es altamente resistente a cambios en la interfaz de YouTube.

## Descargo de Responsabilidad

Este script interactúa con la estructura del DOM de YouTube. Si YouTube realiza una actualización significativa de su código, es posible que el script deje de funcionar. Se mantendrá este repositorio actualizado en la medida de lo posible. Úsalo bajo tu propia responsabilidad.

---

## Licencia

Este proyecto está bajo la [Licencia MIT](https://www.google.com/search?q=LICENSE).
