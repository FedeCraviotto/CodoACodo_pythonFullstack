const imgObserver = new IntersectionObserver((elements) => {
    elements.forEach(element => {
        if (element.isIntersecting) {
            element.target.classList.add('showImage');
        } // else {
           // element.target.classList.remove('showImage');
        // }
    });
});

const navObserver = new IntersectionObserver((elements) => {
    elements.forEach(element => {
        if (element.isIntersecting) {
            element.target.classList.add('showNav');
        }
    });
});

const elementObserver = new IntersectionObserver((elements) => {
    elements.forEach(element => {
        if (element.isIntersecting) {
            element.target.classList.add('showElement');
        }
    });
});

const contactPageElementObserver = new IntersectionObserver((elements) => {
    elements.forEach(element => {
        if (element.isIntersecting) {
            element.target.classList.add('showElement-contactPage');
        }
    });
});
let hiddenElements = document.querySelectorAll('.observedImage');
hiddenElements.forEach(element => {
    imgObserver.observe(element);
});

let galleryNavbar = document.querySelector('.observedNav');
navObserver.observe(galleryNavbar);

let defaultElements = document.querySelectorAll('.observedElement');
defaultElements.forEach(element => {
    elementObserver.observe(element);
})

let contactPageElements = document.querySelectorAll('.observedElement__contactPage');
contactPageElements.forEach(element => {
    contactPageElementObserver.observe(element);
})