# 🌐 Sitio Web Profesional Responsivo

¡Bienvenido a tu sitio web profesional! Este proyecto incluye HTML5, CSS3 y JavaScript moderno con diseño completamente responsivo.

## 📂 Estructura del Proyecto

```
portafolio prueba/
│
├── index.html          # Archivo principal HTML
├── styles.css          # Estilos responsivos
├── script.js           # Funcionalidades JavaScript
├── README.md           # Este archivo
│
└── img/                # Carpeta para imágenes
    ├── logo.png        # Tu logo (150x50px recomendado)
    └── banner.jpg      # Imagen del banner (1200x400px recomendado)
```

## ✨ Características

✅ **8 Secciones Principales:**
- Inicio (con banner)
- Problemas
- Mercado
- Enfoque
- Servicios
- Modelo
- Beneficios
- Contacto

✅ **Diseño Responsivo:**
- Desktops (1200px+)
- Tablets (768px - 1199px)
- Móviles (480px - 767px)
- Ultra móviles (menos de 360px)

✅ **Funcionalidades:**
- Menú hamburguesa para móviles
- Navegación suave entre secciones
- Formulario de contacto con validación
- Animaciones al scroll
- Efectos hover en elementos interactivos
- Header sticky
- Icons de Font Awesome

✅ **Optimizaciones:**
- SEO friendly
- Rendimiento optimizado
- Accesibilidad mejorada
- Código limpio y modular

## 🚀 Cómo Usar

### 1. **Agregar Imágenes**

Coloca tus imágenes en la carpeta `img/`:

- **Logo**: `img/logo.png` (ancho: 150px, alto: 50px)
- **Banner**: `img/banner.jpg` (ancho: 1200px, alto: 400px)

Si no agregas las imágenes, el sitio mostrará placeholders automáticamente.

### 2. **Personalizar Colores**

En `styles.css`, modifica las variables de color en `:root`:

```css
:root {
    --primary-color: #1a3a4a;      /* Color principal */
    --secondary-color: #6b4c9a;    /* Color secundario */
    --accent-color: #e8a87c;       /* Color de acento */
    /* ... más variables ... */
}
```

### 3. **Editar Contenido**

Abre `index.html` y reemplaza el contenido ficticio con tu información:

- Cambiar textos de secciones
- Agregar más cards en problemas/servicios
- Personalizar el formulario de contacto

### 4. **Agregar/Modificar Secciones**

Para agregar una nueva sección, copia este patrón:

```html
<section class="section" id="nueva-seccion">
    <div class="container">
        <h2>Título de Sección</h2>
        <p>Descripción aquí...</p>
    </div>
</section>
```

Y agrega el enlace en el menú:

```html
<li><a href="#nueva-seccion">Nueva Sección</a></li>
```

## 📱 Vista Previa Responsiva

El sitio se adapta perfectamente a:
- 📱 Móviles
- 📱 Tablets
- 💻 Laptops
- 🖥️ Pantallas grandes

## 🎨 Personalización Avanzada

### Cambiar Tipografía

Modifica la font-family en `styles.css`:

```css
body {
    font-family: 'Tu Fuente', sans-serif;
}
```

### Agregar Animaciones

Usa el observador de intersección en `script.js` para disparar animaciones:

```javascript
observer.observe(tuElemento);
```

### Formulario Backend

Para enviar emails reales, reemplaza la parte del formulario en `script.js` con una llamada a tu API:

```javascript
fetch('/tu-api/contacto', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre, email, mensaje })
})
```

## 🔗 Enlaces Útiles

- [Font Awesome Icons](https://fontawesome.com/icons)
- [Google Fonts](https://fonts.google.com/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## 📞 Contacto y Soporte

Para personalización adicional, edita los archivos según tus necesidades. El código está bien comentado y estructura para facilitar modificaciones.

## 📄 Licencia

Este proyecto es de código abierto y libre para usar y modificar.

---

**¡Felicidades! Tu sitio web profesional está listo para usar.** 🎉

Abre `index.html` en tu navegador y comienza a explorar tu nuevo sitio web.
