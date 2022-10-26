let galleryContainer = document.querySelector('.gallery__container'); // Traigo al cont de imágenes
let galleryContainerRetratos = document.querySelector('.gallery__container-retratos'); // Traigo al cont de imágenes
let imageURLs = ['hipocampus2', 'fish2', 'fish3', 'fish4', 'fish5', 'fish6', 'coral', 'dolphin', 'fish', 'hipocampus', 'jellyfish', 'oceano1', 'penguin', 'seal', 'seaTurtle', 'whale', 'manatee', 'jellyfish2', 'jellyfish3', 'jellyfish4', 'jellyfish5', 'jellyfish6', 'jellyfish7', 'seal2', 'seal3', 'sealAndPenguin', 'seaTurtle2', 'seaTurtle3', 'seaTurtle4', 'seaTurtle5', 'shark', 'shark2', 'shark3', 'star' ]; // Agrupo los nombres de los archivos, sin la ext (jpg) en un array para iterarlos

imageURLs.forEach((imgLink, index) => { // Itero sobre el array de nombres de archivos
    let galleryImgContainer = document.createElement('div'); // En cada vuelta creo un contenedor
    galleryImgContainer.classList.add('gallery-img__container', 'observedImage'); // Seteo la clase con el overflow=hidden;
    galleryImgContainer.innerHTML = //Le agrego el HTML de la imágen. Uso backticks y ${} para agregar js.
    ` 
        <img src="../images/seaLife/${imgLink}.jpg" alt="${imgLink}" class="img${index + 1} gallery-img">
    `; // Cada nombre de imagen lo inserto en el path del src, en el alt, y uso el index para que cada imágen sea creada con una clase sea distinta 
    galleryContainer.append(galleryImgContainer); // Termina la vuelta y agrego el div con la img
});

let retratosimageURLs = ['r1', 'r2', 'r3','r4', 'r5', 'r6','r7', 'r8', 'r9'];
retratosimageURLs.forEach((imgLink, index) => { 
    let galleryImgContainer = document.createElement('div'); 
    galleryImgContainer.classList.add('gallery-img__container-retratos', 'observedImage'); 
    galleryImgContainer.innerHTML = 
    `<img src="../images/Retratos/${imgLink}.jpg" alt="${imgLink}" class="img${index + 1} gallery-img">`; 
    galleryContainerRetratos.append(galleryImgContainer); 
});
