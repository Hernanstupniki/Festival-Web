document.addEventListener('DOMContentLoaded', function() {
    navegacionFija();
    crearGaleria();
    resaltarEnlace();
    bajarSuave();
});


function navegacionFija () {
    const header = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');

    document.addEventListener('scroll', function() {
        if(sobreFestival.getBoundingClientRect().bottom < 1) {
            header.classList.add('fixed');}
        else {
            header.classList.remove('fixed');
        }})
}

function crearGaleria () {

    const cantidad_imagenes = 16

    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= cantidad_imagenes; i++) {
        const imagen = document.createElement('IMG');
        imagen.src = `src/img/gallery/full/${i}.jpg`;
        imagen.alt = `Imagen galeria`;

        // Event handler
        imagen.onclick = function() {
            mostrarImagen (i)
        }

        galeria.appendChild(imagen);
    }}

function mostrarImagen (i) {
    const imagen = document.createElement('IMG');
    imagen.src = `src/img/gallery/full/${i}.jpg`;
    imagen.alt = `Imagen galeria`;

    // Boton
    const boton = document.createElement('BUTTON');
    boton.textContent = 'X';
    boton.classList.add('boton-cerrar');
    boton.onclick = cerrarModal;

    //Generar Modal
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.onclick = function() {
        modal.classList.add('fadeOut');
        setTimeout(() => {
            const body = document.querySelector('body');
            body.classList.remove('no-scroll')
            modal.remove();
        }, 500);
    }

    modal.appendChild(imagen);
    modal.appendChild(boton);

    //Agregar al HTML
    const body = document.querySelector('body');
    body.classList.add('no-scroll')
    body.appendChild(modal);
}

function cerrarModal () {
    const modal = document.querySelector('.modal');
    modal.classList.add('fadeOut');
    setTimeout(() => {
        const body = document.querySelector('body');
        body.classList.remove('no-scroll')
        modal.remove();
    }, 500);
}

function resaltarEnlace () {
    document.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navegacion-principal a');

        let actual = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if(window.scrollY >= (sectionTop - sectionHeight / 3) ) {
                actual = section.id;
            }
        })

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === "#" + actual) {
                link.classList.add('active');
            }
        })
    })
}

function bajarSuave (){
    document.querySelectorAll(".navegacion-principal a").forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    )}