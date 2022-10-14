let galleryImages = document.querySelectorAll('.gallery-img'); // Llamo a todas las imágenes de la galería
let modalWindow = document.querySelector('.modal__container'); // Llamo al modal
let modalImage = document.querySelector('.modalImage'); // Llamo a la que va a ser la img a mostrar

galleryImages.forEach((image) => { // Como llamé a todas las imágenes itero sobre todas con forEach
    image.addEventListener('click', (e) => { // A todas les agrego un eventListener al click
        modalImage.src = image.src; // Linkeo el src de la imágen clickeada con el de la img a mostrar
        modalWindow.style.opacity = '1'; // La opacidad de entrada es 0. La paso a 1 para revelar el modal.
        modalWindow.classList.add('active'); // Y al mismo tiempo le agrego una clase que lo setea.
    });
});
// Para que el usuario pueda salir de la imágen de muestra, vamos a permitirle clickear y que se oculte.  
modalWindow.addEventListener('click', (e) => { // Llamo al modal (porque es sobre lo que voy a clickear)
    modalWindow.style.opacity = '0'; // Antes setié la opacidad en 1, ahora para que se oculte = 0
    setTimeout(() => { // Este método genera 1 delay de 1 segundo para que el modal tenga display = none
        modalWindow.classList.remove('active'); // Primer parámetro --> código a ejecutar
    }, 1000) // Segundo parámetro --> delay, en milisegundos. 1000ms = 1 segundo.
});

