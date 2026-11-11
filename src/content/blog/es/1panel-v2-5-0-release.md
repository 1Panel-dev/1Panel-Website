---
title: "1Panel v2.5.0 ya está disponible: gestión de GPU, vLLM y servicios de modelos reconstruidos para todo el flujo de trabajo de modelos locales"
description: "1Panel v2.5.0 reconstruye la gestión de GPU, la gestión de vLLM y los servicios de modelos para conectar la preparación, el despliegue, la monitorización, las pruebas de rendimiento y el acceso a través del AI Gateway. La gestión de máquinas virtuales pasa a estar disponible en la Community Edition, los informes de operaciones en la Professional Edition, y se añaden la gestión de servicios MCP de 1Panel, la detección de actualizaciones de imágenes de contenedor y las actualizaciones por lotes."
pubDate: 2026-11-11
updatedDate: 2026-11-11
tags:
  - 1Panel
  - Notas de la versión
  - GPU
  - vLLM
  - Servicios de modelos
  - AI Gateway
  - Máquinas virtuales
  - MCP
---

1Panel v2.5.0 ya está disponible. Esta versión reconstruye la gestión de GPU, la gestión de vLLM y los servicios de modelos para conectar todo el flujo de trabajo de los modelos locales: desde la preparación, el despliegue y la monitorización hasta las pruebas de rendimiento y la exposición de los modelos a través del AI Gateway. La gestión de máquinas virtuales ahora está completamente disponible para los usuarios de la Community Edition, los informes de operaciones para los usuarios de la Professional Edition, y además se incorporan la gestión de servicios MCP de 1Panel, la detección de actualizaciones de imágenes de contenedor y las actualizaciones por lotes.

El 11 de noviembre de 2026, 1Panel, el panel de gestión de servidores Linux de nueva generación, publicó oficialmente la versión 2.5.0.

1Panel v2.5.0 se centra en **mejorar la experiencia de despliegue de modelos locales**. Conecta el ciclo completo desde la **gestión de GPU, la preparación y el despliegue de modelos y los servicios de modelos hasta las pruebas de rendimiento y la exposición de servicios de Token a través del AI Gateway**. Con la nueva versión, los usuarios pueden desplegar y gestionar rápidamente modelos locales en servidores de IA y completar la comprobación del entorno, la configuración del despliegue y la monitorización en ejecución directamente desde el panel, lo que reduce los cambios repetidos entre distintas herramientas.

Al mismo tiempo, 1Panel v2.5.0 pone la gestión de máquinas virtuales completamente a disposición de los usuarios de la Community Edition, abre los informes de operaciones a los usuarios de la Professional Edition y añade capacidades prácticas como la gestión de servicios MCP de 1Panel y la detección de actualizaciones de imágenes con actualizaciones por lotes, mejorando de forma continua la experiencia de gestión de servidores.

Los usuarios existentes pueden hacer clic en **Buscar actualizaciones** en la esquina inferior derecha del panel para actualizar en línea. Para consultar la lista completa de cambios, consulte la [versión v2.5.0](https://github.com/1Panel-dev/1Panel/releases/tag/v2.5.0).

**Gracias a la comunidad por su constante feedback y apoyo. 1Panel espera seguir construyendo con usted una experiencia de operaciones Linux más eficiente, segura e inteligente.**

## Índice

- [Aspectos destacados](#aspectos-destacados)
- [Más funciones nuevas](#más-funciones-nuevas)
- [Mejoras](#mejoras)
- [Corrección de errores](#corrección-de-errores)
- [Cómo actualizar](#cómo-actualizar)

---

## Aspectos destacados

### Gestión de GPU reconstruida

Antes de desplegar un modelo local es necesario confirmar que la GPU se detecta correctamente y que el controlador y el entorno de ejecución de contenedores están preparados. 1Panel v2.5.0 reconstruye por completo la gestión de GPU y reúne en una interfaz unificada la información del dispositivo, el estado del entorno y la monitorización en tiempo real e histórica, para que los usuarios conozcan de un vistazo las capacidades y el estado de funcionamiento del equipo.

En dispositivos NVIDIA, los usuarios pueden comprobar directamente en el panel el estado del controlador y de NVIDIA Container Toolkit, además de consultar las guías de instalación y configuración correspondientes. Para dispositivos de otros fabricantes, el panel ofrece los diagnósticos de entorno pertinentes para ayudar a determinar qué preparativos quedan pendientes.

Una vez en ejecución el modelo, se pueden consultar métricas en tiempo real como la utilización de la GPU, el uso de memoria, la temperatura y el consumo, y observar la evolución de la carga mediante curvas históricas. Cada dispositivo muestra las métricas que admite, lo que facilita investigar situaciones de recursos ajustados o cargas elevadas y sirve de referencia para ajustar el despliegue.

![Figura 1: Gestión y monitorización de GPU en 1Panel](/blog/1panel-v2-5-0-release/image-01.webp)

*Figura 1: Gestión y monitorización de GPU en 1Panel*

### Modelos seleccionados, descargas de modelos y vLLM Recipes

Con el creciente número de modelos de código abierto, elegir un modelo, saber dónde descargarlo y cómo configurar los parámetros de arranque son cuestiones que deben resolverse antes del despliegue.

1Panel v2.5.0 conecta los modelos seleccionados, las descargas de modelos y las vLLM Recipes para que la preparación del modelo se base en referencias más claras. Los usuarios pueden consultar las especificaciones, los escenarios de uso y el tamaño de los pesos en la lista de modelos seleccionados y, a continuación, pasar al flujo de descarga para preparar los archivos locales necesarios para el despliegue. Las tareas de descarga y los archivos de modelos locales se gestionan de forma centralizada, lo que facilita encontrarlos y reutilizarlos más adelante.

Para los modelos que necesitan una configuración de arranque de referencia, los usuarios también pueden consultar los ejemplos de configuración de despliegue que ofrecen las vLLM Recipes y ajustar los parámetros según el hardware objetivo, la versión del modelo y el entorno de ejecución, reduciendo el trabajo de crear una configuración desde cero.

![Figura 2: Modelos seleccionados, descargas de modelos y vLLM Recipes en 1Panel](/blog/1panel-v2-5-0-release/image-02.webp)

*Figura 2: Modelos seleccionados, descargas de modelos y vLLM Recipes en 1Panel*

### Gestión de vLLM reconstruida para una configuración de despliegue y una monitorización más claras

Una vez preparados los archivos del modelo, el siguiente paso es conseguir que se ejecute de forma estable. 1Panel v2.5.0 reconstruye por completo el módulo de gestión de vLLM y mejora el flujo en torno a la creación de instancias, la configuración del despliegue y la monitorización en ejecución, de modo que los usuarios organicen las operaciones de despliegue según el modelo y el hardware elegidos. Al crear una instancia se pueden seleccionar la imagen de ejecución, los archivos del modelo y la plantilla de arranque, además de configurar parámetros de GPU y de arranque del modelo.

Con la instancia en ejecución, los usuarios pueden consultar en un solo lugar el estado y los registros del modelo, y usar la página de monitorización para revisar el volumen de solicitudes, el rendimiento de Tokens y la latencia de respuesta. Junto con el uso de recursos de la GPU, esto facilita observar la carga del servicio y sirve de base para ajustar los parámetros del despliegue.

![Figura 3: Despliegue de una instancia vLLM en 1Panel](/blog/1panel-v2-5-0-release/image-03.webp)

*Figura 3: Despliegue de una instancia vLLM en 1Panel*

![Figura 4: Monitorización de la inferencia de vLLM en 1Panel](/blog/1panel-v2-5-0-release/image-04.webp)

*Figura 4: Monitorización de la inferencia de vLLM en 1Panel*

### Gestión unificada de modelos locales, nube pública y cuentas de AI Gateway autoalojadas

En la práctica, los modelos desplegados localmente, los modelos de nube pública y los AI Gateway autoalojados suelen coexistir. 1Panel v2.5.0 reconstruye por completo el módulo **Servicios de modelos** y gestiona de forma centralizada los servicios de modelos locales, las cuentas de modelos de nube pública y las cuentas de modelos de AI Gateway autoalojados, lo que facilita revisar y mantener servicios de modelos de distintos orígenes.

Los usuarios pueden configurar la dirección de conexión y las credenciales de acceso según el origen del servicio, consultar la lista de modelos de cada cuenta y verificar la conexión. Una vez completados el despliegue y la integración, la información del servicio y los modelos disponibles son más claros, y se ofrece un punto de entrada unificado para su uso posterior y para las pruebas de rendimiento.

![Figura 5: Gestión de servicios de modelos en 1Panel](/blog/1panel-v2-5-0-release/image-05.webp)

*Figura 5: Gestión de servicios de modelos en 1Panel*

### Esquemas de pruebas de rendimiento predefinidos

Después de poner un modelo en producción, normalmente es necesario conocer su comportamiento con cargas reales, incluidos el tiempo hasta el primer token, la velocidad de salida sostenida y el rendimiento a medida que aumenta la concurrencia. 1Panel v2.5.0 ofrece pruebas de rendimiento de servicios de modelos: los usuarios seleccionan el servicio y el modelo de destino y lanzan una prueba específica con esquemas predefinidos como validación rápida, prueba estándar y prueba completa.

Se pueden ajustar la longitud de las solicitudes, la longitud de salida y la concurrencia, y consultar resultados como el tiempo hasta el primer token (TTFT), la latencia de las solicitudes y el rendimiento de Tokens. Probar distintas configuraciones de despliegue con el mismo esquema ayuda a comprender el impacto de los cambios de parámetros y sirve de referencia para planificar recursos y optimizar el servicio.

![Figura 6: Configuración y resultados de las pruebas de rendimiento de servicios de modelos en 1Panel](/blog/1panel-v2-5-0-release/image-06.webp)

*Figura 6: Configuración y resultados de las pruebas de rendimiento de servicios de modelos en 1Panel*

---

## Más funciones nuevas

- **Máquinas virtuales** — La gestión de máquinas virtuales ya está disponible para los usuarios de la Community Edition.
- **Resumen** — Nueva vista de estado de la GPU y monitorización del rendimiento de Tokens de vLLM, además de compatibilidad con varios accesos directos a directorios.
- **Agentes** — Compatibilidad con DeepSeek Harness y OctoP.
- **Gestión de MCP** — Nueva gestión de servicios MCP de 1Panel.
- **Sitios web** — El tiempo de espera del proxy inverso puede configurarse en el ajuste de rendimiento.
- **Certificados** — Los certificados emitidos pueden enviarse a varios directorios locales a la vez, y pueden importarse certificados raíz autofirmados.
- **Contenedores** — Los directorios de contenedores admiten la carga de archivos por lotes.
- **Contenedores** — Nueva detección de actualizaciones de imágenes con indicadores de estado, y la lista de contenedores admite actualizaciones por lotes.
- **Contenedores** — Compatibilidad con la búsqueda de imágenes remotas en Docker Hub.
- **Contenedores** — Nuevo interruptor para la configuración del entorno de ejecución de GPU NVIDIA.
- **Cron** — Las tareas de acceso a URL permiten establecer la cabecera User-Agent.
- **Sincronización de recursos** — Las plantillas de extensiones PHP pueden sincronizarse entre nodos.
- **Informe de operaciones (X-Pack)** — Los informes de operaciones ya están disponibles para los usuarios de la Professional Edition.
- **Multi-Node (X-Pack)** — Los nodos pueden instalarse y actualizarse con paquetes de instalación existentes.

---

## Mejoras

- **App Store** — La sincronización local de aplicaciones puede incluir nodos secundarios, el prefijo de imágenes puede configurarse y activarse de forma independiente, y se reducen las solicitudes de recursos durante la sincronización.
- **Agentes** — Actualizadas la lista de modelos y la configuración predeterminada de MiniMax Flash, así como el nombre del modelo predeterminado de DeepSeek.
- **Sitios web** — Mejorado el mensaje de estado cuando la configuración de Brotli aún no ha surtido efecto.
- **Runtime** — Las actualizaciones esperan a que finalice la descarga de la imagen antes de detener los contenedores existentes, lo que acorta la interrupción del servicio por la descarga de imágenes.
- **Bases de datos** — Reglas de validación unificadas para nombres de usuario y contraseñas.
- **Contenedores** — Ordenación por fecha de creación, restauración del orden predeterminado al limpiar la ordenación y mitigación de los largos periodos de carga de la lista.
- **Archivos** — Mejorado el manejo de la tecla Esc y la cancelación al renombrar, y reforzadas la validación del origen de operaciones sensibles y el seguimiento del origen en el historial.
- **Terminal** — Mejorada la visualización del borde de los accesos directos del terminal en modo oscuro.
- **Ajustes de interfaz** — Diálogos unificados para registros de tareas y confirmaciones de eliminación; actualizado el fondo de la página de inicio de sesión de la Enterprise Edition.
- **Auditoría de registros** — Mejorado el registro de la IP del cliente y la conservación de la información de inicio de sesión con proxies de confianza.
- **Ajustes del panel** — Compatibilidad para eliminar claves API revocadas, mejoras en el almacenamiento de copias de seguridad y en la validación de certificados de proxy HTTPS, y compatibilidad con certificados CA personalizados.
- **Sistema** — Posición unificada de la información emergente de las tablas, mayor número máximo de elementos por página y mejoras en el diseño adaptable de las tablas.
- **Sistema** — Restricciones de acceso más estrictas para sesiones caducadas y uso de credenciales, mejor validación de certificados TLS en solicitudes a recursos externos y actualización de las dependencias de análisis de Markdown y HTML.
- **Multi-Node (X-Pack)** — Mejorada la velocidad de carga SFTP entre nodos y ampliado el periodo de reintento de la sincronización de datos entre nodos.

---

## Corrección de errores

- **App Store** — Corregido un problema por el que las contraseñas numéricas que empiezan por «+» o «-0» se modificaban al instalar aplicaciones o cambiar sus parámetros.
- **App Store** — Corregido un problema por el que los valores de las variables de entorno se modificaban durante la actualización de aplicaciones, y por el que las aplicaciones de versiones retiradas no podían actualizarse.
- **App Store** — Corregidos los errores de redirección del icono de la aplicación al acceder mediante un proxy de nodo, así como los problemas de actualización de la caché de recursos y de las opciones de versión del entorno de ejecución PHP.
- **Agentes** — Corregidos los errores de módulos faltantes y de códigos QR no mostrados durante la configuración del canal de WeChat de Hermes.
- **Agentes** — Corregidos los problemas de compatibilidad del plugin de Feishu tras las actualizaciones de OpenClaw, conservando la configuración anterior de Feishu.
- **Sitios web** — Corregido un problema por el que los cambios del entorno de ejecución PHP no se sincronizaban con los subsitios.
- **Runtime** — Corregido un problema por el que las terminales de proyectos indicaban que no se encontraba el contenedor y no podían conectarse.
- **Bases de datos** — Corregido un problema por el que los accesos a las herramientas de gestión no usaban la dirección web personalizada de la aplicación.
- **Contenedores** — Corregido un problema por el que se perdían los filtros de búsqueda al volver a la lista tras editar un contenedor, y por el que no se podían limpiar los registros de instancias de aplicaciones con letras mayúsculas en el nombre.
- **Archivos** — Corregido un problema por el que al renombrar se sobrescribía directamente un archivo de destino con el mismo nombre, por el que la ruta de guardado de descargas podía salir del directorio seleccionado y por el que se permitía la inyección de argumentos en el comando de compresión tar.
- **Terminal** — Corregido un problema por el que la clave automática no se mostraba tras añadir un nodo y la conexión seguía solicitando la contraseña SSH.
- **Cron** — Corregido un problema por el que la sincronización de la biblioteca de scripts usaba una caché de recursos obsoleta.
- **Auditoría de registros** — Corregido un problema por el que los registros de operaciones mostraban el ID del recurso en lugar del nombre al cambiar la versión de PHP de un sitio web y al eliminar un entorno de ejecución PHP.
- **Ajustes del panel** — Corregido un problema por el que el panel no era accesible tras volver a habilitar la entrada de seguridad, y por el que la búsqueda de cuentas de copia de seguridad por nombre era anómala.
- **Sistema** — Corregido un problema por el que el cambio de contraseña mediante el comando `1pctl` no respetaba la configuración de complejidad de contraseñas.
- **Sistema** — Corregido un problema por el que, al finalizar el horario de verano, la sincronización horaria en el periodo repetido retrasaba el reloj del sistema una hora.
- **WAF (X-Pack)** — Corregidos los errores al abrir la configuración del sitio web y el problema de que las API básicas de los nodos secundarios de la Community Edition no se permitían.
- **Monitorización de sitios web (X-Pack)** — Corregido un error en las estadísticas de los registros de solicitudes.

---

## Cómo actualizar

Los usuarios existentes pueden hacer clic en **Buscar actualizaciones** en la esquina inferior derecha del panel de 1Panel para completar la actualización en línea.

¿Es nuevo en 1Panel? Visite [1panel.pro](https://1panel.pro/) para empezar.

---

## Fuente

Notas de la versión completas: [1Panel v2.5.0 en GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.5.0)
