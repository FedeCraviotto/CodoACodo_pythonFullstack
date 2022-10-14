let galleryImages = document.querySelectorAll('.gallery-img');
let modalWindow = document.querySelector('.modal__container');
let modalImage = document.querySelector('.modalImage');

galleryImages.forEach((image) => {
    image.addEventListener('click', (e) => {
        modalImage.src = image.src;
        modalWindow.classList.add('active');
    })
})

modalWindow.addEventListener('click', (e) => {
    modalWindow.classList.remove('active');
})

