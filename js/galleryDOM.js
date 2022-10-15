let galleryContainer = document.querySelector('.gallery__container'); // Traigo al cont de imágenes
let imageURLs = ['coral', 'dolphin', 'fish', 'hipocampus', 'medusas', 'oceano1', 'penguin', 'seal', 'seaTurtle', 'whale']; // Agrupo los nombres de los archivos, sin la ext (jpg) en un array para iterarlos

imageURLs.forEach((imgLink, index) => { // Itero sobre el array de nombres de archivos
    let galleryImgContainer = document.createElement('div'); // En cada vuelta creo un contenedor
    galleryImgContainer.classList.add('gallery-img__container'); // Seteo la clase con el overflow=hidden;
    galleryImgContainer.innerHTML = //Le agrego el HTML de la imágen. Uso backticks y ${} para agregar js.
    ` 
        <img src="images/seaLife/${imgLink}.jpg" alt="${imgLink}" class="img${index + 1} gallery-img">
    `; // Cada nombre de imagen lo inserto en el path del src, en el alt, y uso el index para que cada imágen sea creada con una clase sea distinta 
    galleryContainer.append(galleryImgContainer); // Termina la vuelta y agrego el div con la img
});