# Facebook - Unfollow Pages Script

## Descripción

Este script automatiza el proceso de dejar de seguir páginas en Facebook desde la sección **Páginas que sigues**.  
Hace clic en los menús de opciones y selecciona "Dejar de seguir", lote por lote.

## Uso

1. Entra a facebook desde tu navegador.
2. Da click en tu foto de pefil en el menú superior y selecciona la opción: `Configuración y privacidad > Registro de actividad > Páginas, páginas que te gustan e intereses`.
3. Abre la consola del navegador (F12 → Console).
4. Pega el contenido del script `unfollow-pages.js`.
5. Sigue las instrucciones del prompt:
   - Modo **loop**: procesará automáticamente hasta que no queden más páginas cargadas.
   - Modo **manual**: elige cuántos lotes quieres procesar.

## Notas

- Solo procesa los elementos **cargados en pantalla**. Si quedan más, el script hace scroll y repite.
- Puede aparecer un warning en consola: `Trying to load a Privacy Selector Dialog without a scope.` Este error es interno de Facebook y **no afecta la ejecución**.

## Riesgos y consideraciones

- No abuses del script en periodos muy cortos, podría levantar sospechas en Facebook.
- Siempre usa pausas razonables (`delay`) para emular el comportamiento humano.
- Este script es educativo y de uso personal.
