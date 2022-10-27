let galleryContainerPaisajes = document.querySelector('.gallery__container-paisajes'); 

let imageURLsVerticales = [];
for (let i = 1; i<= 9; i++) {
    if (i<10) {
    imageURLsVerticales.push(`PV0${i}.jpg`);
    } else {
        imageURLsVerticales.push(`PV${i}.jpg`);
    }
}

let imageURLsHorizonales = [];
for (let i = 1; i<= 7; i++) {
    if (i<10) {
        imageURLsHorizonales.push(`PH0${i}.jpg`);
    } else {imageURLsHorizonales.push(`PH${i}.jpg`);

    }
}

imageURLsHorizonales.forEach((imgLink, index) => { 
    let galleryImgContainer = document.createElement('div'); 
    galleryImgContainer.classList.add('gallery-img__container-paisajes', 'observedImage', `imgH0${index + 1}`); 
    galleryImgContainer.innerHTML = 
    `<img src="../images/paisajes/horizontal/${imgLink}" alt="${imgLink}" class="gallery-img">`; 
    galleryContainerPaisajes.append(galleryImgContainer); 
});

imageURLsVerticales.forEach((imgLink, index) => { 
    let galleryImgContainer = document.createElement('div'); 
    galleryImgContainer.classList.add('gallery-img__container-paisajes', 'observedImage', `imgV0${index + 1}`); 
    galleryImgContainer.innerHTML = 
    `<img src="../images/paisajes/vertical/${imgLink}" alt="${imgLink}" class="gallery-img">`; 
    galleryContainerPaisajes.append(galleryImgContainer); 
});