let galleryContainer = document.querySelector('.gallery__container'); // Traigo al cont de imágenes
let imageURLs = ['hipocampus2', 'fish2', 'fish3', 'fish4', 'fish5', 'fish6', 'coral', 'dolphin', 'fish', 'hipocampus', 'jellyfish', 'oceano1', 'penguin', 'seal', 'seaTurtle', 'whale', 'manatee', 'jellyfish2', 'jellyfish3', 'jellyfish4', 'jellyfish5', 'jellyfish6', 'jellyfish7', 'seal2', 'seal3', 'sealAndPenguin', 'seaTurle2', 'seaTurle3', 'seaTurle4', 'seaTurle5', 'shark', 'shark2', 'shark3', 'star' ]; // Agrupo los nombres de los archivos, sin la ext (jpg) en un array para iterarlos

imageURLs.forEach((imgLink, index) => { // Itero sobre el array de nombres de archivos
    let galleryImgContainer = document.createElement('div'); // En cada vuelta creo un contenedor
    galleryImgContainer.classList.add('gallery-img__container'); // Seteo la clase con el overflow=hidden;
    galleryImgContainer.innerHTML = //Le agrego el HTML de la imágen. Uso backticks y ${} para agregar js.
    ` 
        <img src="images/seaLife/${imgLink}.jpg" alt="${imgLink}" class="img${index + 1} gallery-img">
    `; // Cada nombre de imagen lo inserto en el path del src, en el alt, y uso el index para que cada imágen sea creada con una clase sea distinta 
    galleryContainer.append(galleryImgContainer); // Termina la vuelta y agrego el div con la img
});