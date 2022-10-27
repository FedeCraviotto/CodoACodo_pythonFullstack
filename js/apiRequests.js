
// artObjects[0].headerImage.url

// 5PdmheO9



fetch('https://www.rijksmuseum.nl/api/nl/collection?key=5PdmheO9&involvedMaker=Rembrandt+van+Rijn')
.then(response =>  response.json())
.then(data => console.log(data));
