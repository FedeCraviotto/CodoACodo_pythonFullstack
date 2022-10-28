const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// fetch('https://www.rijksmuseum.nl/api/nl/collection?key=5PdmheO9&involvedMaker=Rembrandt+van+Rijn$imgonly=True&toppieces=True')
// .then(promesa1SinAcceso =>  promesa1SinAcceso.json())
// .then(promesaAccesible => fetchedData = data
// )
// .catch(error => {
//   console.log('error');
// })
//     console.log(data.artObjects[0].longTitle);
//     console.log(data.artObjects[0].webImage.url)
