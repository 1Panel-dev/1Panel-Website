---
title: "Lanzamiento de 1Panel v2.2.1: whitelist de puertos, overview multi-nodo y Dynadot DNS"
description: "1Panel v2.2.1 anade Dynadot DNS, whitelist de puertos del firewall, proxy para descargas remotas, overview de agents y certificados en multi-nodo, y amplias mejoras UI y correcciones."
pubDate: 2026-06-11
updatedDate: 2026-06-11
tags:
  - 1Panel
  - Release Notes
  - Firewall
  - Multi-Node
  - MCP
  - File Browser
  - Certificates
  - Panel Settings
---

1Panel v2.2.1 ya esta disponible. Esta version amplia certificados y firewall, refuerza la gestion multi-nodo y trae muchas mejoras de UI y correcciones de fiabilidad en contenedores, cron y ajustes del sistema.

## Highlights

- **Dynadot DNS** — nuevo proveedor DNS para emision automatica de certificados
- **Whitelist de puertos** — gestion centralizada de puertos permitidos en el firewall
- **Overview multi-nodo** — agents y certificados visibles en la pagina de resumen
- **File Browser** — proxy en descargas remotas; seleccion multi-fila con Shift
- **Alertas del panel** — multiples metodos del mismo tipo; SMS con nombre visible y validacion reforzada
- **Pulido general** — logs de contenedores, tema oscuro, lista de tareas, menu MCP, seguridad en terminal

---

## New Features

### Certificates

- **Proveedor Dynadot DNS** — emitir y renovar certificados con validacion DNS en Dynadot ([`#12829`](https://github.com/1Panel-dev/1Panel/pull/12829)).

### File Browser

- **Proxy para descargas remotas** — configurar proxy cuando el acceso directo esta bloqueado o enrutado ([`#12942`](https://github.com/1Panel-dev/1Panel/pull/12942)).

### Firewall

- **Gestion de whitelist de puertos** — definir y gestionar whitelists desde el panel ([`#12912`](https://github.com/1Panel-dev/1Panel/pull/12912)).

### Multi-Node

- **Overview: agents y certificados** — la pagina de overview multi-nodo muestra informacion de agents y certificados ([`#12933`](https://github.com/1Panel-dev/1Panel/pull/12933)).
- **Gestion de paquetes del sistema** — administrar paquetes de instalacion de 1Panel entre nodos ([`#12982`](https://github.com/1Panel-dev/1Panel/pull/12982)).

### Panel Settings

- **Multiples alertas del mismo tipo** — mas de un metodo de alerta por tipo de canal ([`#12922`](https://github.com/1Panel-dev/1Panel/pull/12922)).

---

## Enhancements

### Overview

- **Estilos de notas** — presentacion refinada del widget de notas en inicio ([`#12958`](https://github.com/1Panel-dev/1Panel/pull/12958)).

### Containers

- **Visualizacion de logs** — logs de contenedores mas claros ([`#12939`](https://github.com/1Panel-dev/1Panel/pull/12939)).
- **Logs tras borrar imagen** — logs de tarea se abren automaticamente tras eliminar imagen ([`#12868`](https://github.com/1Panel-dev/1Panel/pull/12868)).

### File Browser

- **Seleccion multiple con Shift** — mantener Shift para seleccionar filas contiguas ([`#12941`](https://github.com/1Panel-dev/1Panel/pull/12941)).
- **Logica de guardado del editor** — guardado mas predecible ([`#12852`](https://github.com/1Panel-dev/1Panel/pull/12852)).

### Firewall

- **Comprobacion de ocupacion en rangos** — reglas de rango verifican si los puertos estan en uso ([`#12950`](https://github.com/1Panel-dev/1Panel/pull/12950)).

### SSH Management

- **Analisis de logs** — logica de parsing SSH mejorada ([`#12803`](https://github.com/1Panel-dev/1Panel/pull/12803)).

### Terminal

- **Seguridad de comandos generados** — validacion adicional de seguridad ([`#12826`](https://github.com/1Panel-dev/1Panel/pull/12826)).

### Multi-Node

- **Limites de nodos** — manejo mas claro al alcanzar el limite ([`#12867`](https://github.com/1Panel-dev/1Panel/pull/12867)).
- **Cambio en flotas grandes** — cambio de nodo optimizado para muchos nodos ([`#12928`](https://github.com/1Panel-dev/1Panel/pull/12928)).

### MCP

- **Titulos del menu** — titulos MCP mas consistentes en la barra lateral ([`#12818`](https://github.com/1Panel-dev/1Panel/pull/12818)).

### Panel Settings

- **Alertas SMS** — nombres visibles y validacion de configuracion reforzada ([`#12945`](https://github.com/1Panel-dev/1Panel/pull/12945)).
- **Avisos al importar licencia** — advertencias al importar licencias ([`#12952`](https://github.com/1Panel-dev/1Panel/pull/12952)).

### System

- **Resultado de comandos** — salida de ejecucion mas legible ([`#12837`](https://github.com/1Panel-dev/1Panel/pull/12837)).
- **Lista de tareas y barra lateral** — interacciones mas fluidas ([`#12839`](https://github.com/1Panel-dev/1Panel/pull/12839)).
- **Captcha** — metodo de validacion optimizado ([`#12946`](https://github.com/1Panel-dev/1Panel/pull/12946)).
- **Documentacion API** — anotaciones y logs mejorados ([`#12915`](https://github.com/1Panel-dev/1Panel/pull/12915), [`#12962`](https://github.com/1Panel-dev/1Panel/pull/12962)).
- **Botones deshabilitados en tablas** — estilo mas claro ([`#12937`](https://github.com/1Panel-dev/1Panel/pull/12937)).
- **Tema oscuro** — estilos refinados ([`#12944`](https://github.com/1Panel-dev/1Panel/pull/12944)).

---

## Bug Fixes

| Area | Correccion |
|---|---|
| **App Store** | Se pueden crear entornos runtime con repositorios de apps personalizados ([`#12887`](https://github.com/1Panel-dev/1Panel/pull/12887)). |
| **Websites** | Los nombres de plantillas rewrite personalizadas conservan mayusculas/minusculas ([`#12714`](https://github.com/1Panel-dev/1Panel/pull/12714)). |
| **Certificates** | Los certificados del panel se sincronizan tras renovacion automatica ([`#12858`](https://github.com/1Panel-dev/1Panel/pull/12858)). |
| **Containers** | Las IP de contenedores se conservan tras upgrades de Compose ([`#12902`](https://github.com/1Panel-dev/1Panel/pull/12902)). |
| **File Browser** | La copia con comodines funciona correctamente ([`#12883`](https://github.com/1Panel-dev/1Panel/pull/12883)). |
| **Firewall** | La informacion de ocupacion de puertos se muestra correctamente ([`#12961`](https://github.com/1Panel-dev/1Panel/pull/12961)). |
| **Toolbox** | Los escaneos antivirus ya no fallan inesperadamente ([`#12892`](https://github.com/1Panel-dev/1Panel/pull/12892)). |
| **Toolbox** | Uptime del guard de procesos superior a un dia se analiza bien ([`#12713`](https://github.com/1Panel-dev/1Panel/pull/12713)). |
| **SSH Management** | Auto-habilitacion SSH se comporta correctamente ([`#12898`](https://github.com/1Panel-dev/1Panel/pull/12898)). |
| **Cron** | Las bibliotecas de scripts se ejecutan en nodos hijo ([`#12869`](https://github.com/1Panel-dev/1Panel/pull/12869)). |
| **Cron** | El recuento de retencion de backup aplica al actualizar scripts ([`#12896`](https://github.com/1Panel-dev/1Panel/pull/12896)). |
| **Multi-Node** | Auto-actualizacion de nodos completa correctamente ([`#12875`](https://github.com/1Panel-dev/1Panel/pull/12875)). |
| **Multi-Node** | Terminal de nodo desde overview funciona de nuevo ([`#12901`](https://github.com/1Panel-dev/1Panel/pull/12901)). |
| **Log Audit** | Los logs de operacion se muestran correctamente ([`#12936`](https://github.com/1Panel-dev/1Panel/pull/12936)). |
| **System** | Fallos al abrir archivos ya no causan excepciones del sistema ([`#12808`](https://github.com/1Panel-dev/1Panel/pull/12808)). |
| **System** | El tema se actualiza de inmediato tras importar licencia ([`#12911`](https://github.com/1Panel-dev/1Panel/pull/12911)). |
| **System** | Imagenes de fondo de login personalizadas se muestran bien ([`#12977`](https://github.com/1Panel-dev/1Panel/pull/12977)). |

---

## How to Upgrade

Pulse el boton `Update` abajo a la derecha en el panel.

Nuevo en 1Panel? Visite [1panel.pro](https://1panel.pro/).

---

## Source

Notas completas: [1Panel v2.2.1 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.2.1)
