## Pasos para instalar la extensión

### Configuración del proyecto
1. Clonar el proyecto `git clone` 
2. Acceder al proyecto `cd aero-extension`
3. Instalar dependencias `npm install`
4. Crear build de producción `npm run build`

### Incluir en el navegador
1. Abrir chrome y acceder a chrome://extensions/ (copiar la ruta en el navegador)
2. Clic en **cargar extensión sin empaquetar**
3. Navegar hasta el proyecto y seleccionar la carpeta build

Cada vez que se abra una nueva pestaña se accede a la extensión.

**Nota:** es necesario habilitar el modo desarrollador (ubicado en el márgen superior derecho dentro de chrome://extensions/)
