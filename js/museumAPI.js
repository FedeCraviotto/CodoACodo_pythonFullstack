let aboutSwiperContainer = document.querySelector(".swiper-wrapper");
let fetchedData;

async function fetchAndLoadImages() {
  const data = await fetch(
    "https://www.rijksmuseum.nl/api/nl/collection?key=5PdmheO9&involvedMaker=Rembrandt+van+Rijn"
  );
  const dataProcesada1 = await data.json();
  const data2 = await fetch(
    "https://www.rijksmuseum.nl/api/nl/collection?key=5PdmheO9&involvedMaker=Johannes+Vermeer"
  );
  const dataProcesada2 = await data2.json();

  const data3 = await fetch(
    "https://www.rijksmuseum.nl/api/nl/collection?key=5PdmheO9&involvedMaker=Vincent+van+Gogh"
  );
  const dataProcesada3 = await data3.json();

  let dataProcesada = [dataProcesada1, dataProcesada2,dataProcesada3]
  try {
    dataProcesada.forEach(data => {
      data.artObjects.forEach((dataset) => {
        if (dataset.webImage !== null
          && (dataset.principalOrFirstMaker.includes('Gogh')
          || dataset.principalOrFirstMaker.includes('Vermeer')
          || dataset.principalOrFirstMaker.includes('Rembrandt'))
          ) {
          aboutSwiperContainer.innerHTML += `
            <div class="swiper-slide">
                      <img src="${dataset.webImage.url}" alt="" class="swiper__img" />
  
                      <div class="swiper__desc">
                        <h4>Autor: ${dataset.principalOrFirstMaker}</h4>
                        <p>Descripción de la obra: ${dataset.longTitle}</p>
                      </div>
            </div>
            `;
        }
      });
    })
  } catch (error) {
    console.log(error);
  }
}

fetchAndLoadImages();
