let galleryImages = document.querySelectorAll('.gallery-img'); 
let modalWindow = document.querySelector('.modal__container'); 
let modalImage = document.querySelector('.modalImage');
document.addEventListener('DOMContentLoaded', watchEvents)
visualViewport.addEventListener('resize', watchEvents);

function showElements(image) {
    modalImage.src = image.src; 
    modalWindow.style.opacity = '1'; 
    modalWindow.classList.add('active');
}

function hideElements() {
    modalWindow.style.opacity = '0'; 
            setTimeout(() => { 
                modalWindow.classList.remove('active'); 
            }, 1000)
}

function watchEvents() {
    let mediaQuery = window.matchMedia('(min-width:768px)');
    if(mediaQuery.matches) {
        modalWindow.style.display = 'flex'
        galleryImages.forEach((image) => { 
            image.addEventListener('click', (e) => { 
                showElements(image)
            });
        });
       
        modalWindow.addEventListener('click', (e) => {
            hideElements()
        });
    } else if (!mediaQuery.matches){
        modalWindow.style.display = 'none'
        modalWindow.style.opacity = '0'
        if (modalWindow.classList.contains("active")) {
            modalWindow.classList.remove('active');
        }
    }
}