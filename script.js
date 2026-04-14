// ============================================ 
// FUNCIONALIDAD DE MENÚ MÓVIL
// ============================================

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

// Abrir/cerrar menú
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ============================================ 
// CIERRE DE MENÚ AL HACER CLIC FUERA
// ============================================

document.addEventListener('click', (e) => {
    const isClickInsideNav = navMenu.contains(e.target);
    const isClickOnToggle = menuToggle.contains(e.target);
    
    if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ============================================ 
// FORMULARIO DE CONTACTO
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const formData = new FormData(this);
        
        // Validar campos
        const nombre = this.querySelector('input[type="text"]').value.trim();
        const email = this.querySelector('input[type="email"]').value.trim();
        const mensaje = this.querySelector('textarea').value.trim();
        
        if (nombre === '' || email === '' || mensaje === '') {
            alert('Por favor, completa todos los campos');
            return;
        }
        
        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, ingresa un email válido');
            return;
        }
        
        // Simulación de envío (reemplaza con tu lógica de backend)
        console.log('Formulario enviado:', {
            nombre: nombre,
            email: email,
            mensaje: mensaje
        });
        
        // Mostrar mensaje de éxito
        alert('¡Mensaje enviado exitosamente! Te contactaremos pronto.');
        
        // Limpiar formulario
        this.reset();
    });
}

// ============================================ 
// EFECTO DE DESPLAZAMIENTO SUAVE
// ============================================

// Headers dinámico al hacer scroll
const header = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        header.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ============================================ 
// CONTADOR DE SCROLL PARA ANIMACIONES
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar todas las tarjetas y servicios
const cards = document.querySelectorAll('.card, .service, .benefit-item');
cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ============================================ 
// NAVBAR ACTIVO SEGÚN SECCIÓN ACTUAL
// ============================================

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });
    
    // Remover clase activa de todos los enlaces
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Agregar clase activa al enlace actual
    const currentLink = document.querySelector(`.nav-menu a[href="#${current}"]`);
    if (currentLink) {
        currentLink.classList.add('active');
    }
});

// ============================================ 
// CARGAR CONTENIDO DINÁMICAMENTE
// ============================================

// Función para verificar si las imágenes existen
function checkImages() {
    const logoImg = document.querySelector('.logo');
    const bannerImg = document.querySelector('.banner-img');
    
    // Si las imágenes no existen, mostrar placeholders
    if (logoImg && logoImg.src.includes('./img/logo.png')) {
        logoImg.addEventListener('error', function() {
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="150" height="50"%3E%3Crect fill="%236b4c9a" width="150" height="50"/%3E%3Ctext x="50%25" y="50%25" fill="white" font-size="14" text-anchor="middle" dy=".3em"%3ELOGO%3C/text%3E%3C/svg%3E';
        });
    }
    
    if (bannerImg && bannerImg.src.includes('./img/banner.jpg')) {
        bannerImg.addEventListener('error', function() {
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1200" height="400"%3E%3Crect fill="%235a4a7a" width="1200" height="400"/%3E%3Ctext x="50%25" y="50%25" fill="white" font-size="30" text-anchor="middle" dy=".3em"%3EBanner Image%3C/text%3E%3C/svg%3E';
        });
    }
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', checkImages);

// ============================================ 
// SMOOTH SCROLL PARA NAVEGADORES ANTIGUOS
// ============================================

function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Agregar listener a los enlaces de navegación
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            smoothScroll(href);
        }
    });
});

// ============================================ 
// TEMA OSCURO/CLARO (OPCIONAL)
// ============================================

// Verificar preferencia del sistema
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // El sistema prefiere tema oscuro
    // Aquí puedes aplicar estilos adicionales si lo deseas
}

// ============================================ 
// LOG DE INICIALIZACIÓN
// ============================================

console.log('✓ Sitio web cargado correctamente');
console.log('✓ Navegación móvil lista');
console.log('✓ Formulario de contacto activo');
