# Nuestro Rincón

Este es un proyecto web sencillo creado con HTML, CSS y JavaScript.

La idea es tener una página especial para mi pareja, donde pueda entrar cuando me extrañe o cuando quiera ver algo que le recuerde a mí.

## Archivos principales

- `index.html`: estructura de la página.
- `style.css`: diseño visual.
- `script.js`: interactividad, contraseña y mensajes aleatorios.
- `img/`: carpeta para guardar fotos.

## Contraseña

La contraseña está en el archivo `script.js`.

```js
const PASSWORD = "amor";
```

Puedes cambiar `"amor"` por una fecha, palabra o frase especial.

## Cómo editar fotos

Puedes guardar tus fotos dentro de la carpeta `img`.

Ejemplo:

```txt
img/foto1.jpg
img/foto2.jpg
img/foto3.jpg
```

Luego puedes modificar el HTML para mostrarlas usando:

```html
<img src="img/foto1.jpg" alt="Nuestro recuerdo">
```

## Cómo publicarlo

Puedes publicarlo gratis en Netlify.

1. Entra a Netlify.
2. Selecciona la opción para subir proyecto manualmente.
3. Arrastra la carpeta del proyecto.
4. Netlify te dará un enlace.
5. Abre el enlace en Chrome desde Android.
6. Toca los tres puntos.
7. Selecciona "Agregar a pantalla principal".

## Tecnologías utilizadas

- HTML
- CSS
- JavaScript
