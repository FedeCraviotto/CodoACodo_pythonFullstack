let contenidoHeader =`
<nav class="observedNav">
<ul class="menu1">
  <li>X.X.X.</li>
  <a href="../index.html"
    ><img
      src="../images/Argentina_2.svg"
      alt="logo skyteam"
      width="35px"
  /></a>
</ul>
<ul class="menu2">
  <li>
    <a href="../index.html">Home</a>
  </li>
  <li>
    <a href="#">Galeria </a>
    <ul class="dropdown-menu">
      <li>
        <a class="dropdown-item" href="galleryretratos.html"
          >Retratos</a
        >
      </li>
      <li><a class="dropdown-item" href="#">Paisajes</a></li>
      <li>
        <a class="dropdown-item" href="galleryvidamarina.html"
          >Vida Marina</a
        >
      </li>
    </ul>
  </li>
  <li>
    <a href="acercade.html">Acerca de</a>
  </li>
  <li>
    <a href="contacto.html">Contacto</a>
  </li>
</ul>
</nav>
  `
// document.getElementById("sectionHeader").innerHTML=contenidoHeader;

let contenidoFooter =`
<div
        class="newsletter observedElement__contactPage observedElement--fromLeft"
      >
        <p>SUSCRIBITE A MI NEWSLETTER</p>
        <p>
          Enterate de las últimas noticias, eventos programados, servicios y
          ofertas especiales
        </p>
        <a class="btn-anchor" href="contacto.html">Contactame</a>
      </div>
      <div
        class="footer-contact observedElement__contactPage observedElement--fromRight"
      >
        <div class="footer-data">
          <p class="footer-data__item">Julian Marcos Cipelli</p>
          <p class="footer-data__item">Buenos Aires, Argentina</p>
        </div>
        <div class="footer-socials">
          <div class="footer-socials__pinterest">
            <a
              href="https://pinterest.com/"
              target="_blank"
              class="socials__anchor"
              ><i class="fa-brands fa-pinterest"></i
            ></a>
          </div>
          <div class="footer-socials__instagram">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              class="socials__anchor"
              ><i class="fa-brands fa-instagram"></i
            ></a>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>
          © JMC 2022. Todo el contenido de este sitio está sujeto a derechos de
          autor. En caso de compartir los recursos hacerlo de manera responsable
          y no obviar hacer mención de la fuente de autoría.
        </p>
      </div>
`
let domFooters = document.querySelectorAll(".domFooter")
domFooters.forEach(footer => {
  footer.innerHTML=contenidoFooter;
})