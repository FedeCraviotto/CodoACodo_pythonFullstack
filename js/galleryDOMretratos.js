let galleryContainerRetratos = document.querySelector('.gallery__container-retratos'); // Traigo al cont de imágenes

let retratosimageURLs = ['r1', 'r2', 'r3','r4', 'r5', 'r6','r7', 'r8', 'r9'];
retratosimageURLs.forEach((imgLink, index) => { 
    let galleryImgContainer = document.createElement('div'); 
    galleryImgContainer.classList.add('gallery-img__container-retratos', 'observedImage', `img${index + 1}`); 
    galleryImgContainer.innerHTML = 
    `<img src="../images/Retratos/2/${imgLink}.jpg" alt="${imgLink}" class="img${index + 1} gallery-img">`; 
    galleryContainerRetratos.append(galleryImgContainer); 
});
