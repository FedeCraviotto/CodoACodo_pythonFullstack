const imgObserver = new IntersectionObserver((elements) => {
    elements.forEach(element => {
        if (element.isIntersecting) {
            element.target.classList.add('showElement');
        } // else {
           // element.target.classList.remove('showElement');
        // }
    })
})

const navObserver = new IntersectionObserver((elements) => {
    elements.forEach(element => {
        if (element.isIntersecting) {
            element.target.classList.add('showElement');
        }
    })
})

let hiddenElements = document.querySelectorAll('.observedElement');
hiddenElements.forEach(element => {
    imgObserver.observe(element);
})

let galleryNavbar = document.querySelector('.observedNav');
navObserver.observe(galleryNavbar)
