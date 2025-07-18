# 🎸 Songsterr Popup Remover

> 🔥 Extensión para Chrome que elimina popups, banners y desenfoques molestos en Songsterr, mejorando tu experiencia de lectura de tablaturas.

## 📌 Descripción

**Songsterr Popup Remover** es una extensión ligera para Google Chrome que mejora la experiencia de usuario en [Songsterr.com](https://www.songsterr.com/) eliminando automáticamente:

- Popups molestos
- Banners publicitarios
- Desenfoques (blur) que bloquean la vista de las tablaturas

Con esta extensión podrás acceder directamente a las partituras sin interrupciones visuales o mensajes intrusivos.

## 🚀 Instalación Manual

1. Descarga o clona este repositorio.
2. Abre Chrome y navega a `chrome://extensions/`.
3. Activa el **Modo de desarrollador** (arriba a la derecha).
4. Haz clic en **"Cargar descomprimida"** y selecciona la carpeta del proyecto.
5. Visita [Songsterr](https://www.songsterr.com/) y disfruta sin distracciones.

## 🛠️ Archivos principales

| Archivo        | Descripción                                                       |
|----------------|-------------------------------------------------------------------|
| `manifest.json`| Define los permisos, host permitido y carga del script.           |
| `content.js`   | Contiene el código que elimina automáticamente los elementos no deseados. |

## ⚙️ Funcionamiento

- Identifica y elimina elementos específicos de la interfaz (popups, banners, blur).
- Se ejecuta cada 200ms para asegurar una vista limpia constante.
- Usa un `MutationObserver` para detectar y eliminar elementos reinsertados dinámicamente.

## 🖥️ Permisos utilizados

```json
"permissions": [
  "scripting"
],
"host_permissions": [
  "https://www.songsterr.com/*"
]
