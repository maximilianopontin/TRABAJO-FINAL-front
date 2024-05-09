// Footer.js
import React from 'react';
import "./Footer.css";
import '@fortawesome/fontawesome-free/css/all.css';
// Footer.js


function Footer() {
    return (

        <footer id="footer" class="footer">

            <div class="container">

                <div class="footer-row">


                    <div class="footer-links">
                        <h4 class="footer-title">Ayudas</h4>
                        <ul>
                            <li><a href="#">Preguntas</a></li>
                            <li><a href="#">Compras</a></li>
                            <li><a href="#">Servicios de atención al cliente</a></li>
                            <li><a href="#">Estatus de orden</a></li>
                            <li><a href="#">Pago</a></li>
                        </ul>
                    </div>

                    <div class="footer-links">

                        <h4 class="footer-title">Tienda</h4>
                        <ul>
                            <li><a href="#">Excursiones</a></li>
                            <li><a href="#">Alquiler de coches</a></li>
                            <li><a href="#">Reserva de vuelos</a></li>
                            <li><a href="#">Reserva de alojamiento</a></li>
                            <li><a href="#">Seguros de viajes</a></li>
                            <li><a href="#">Asistencia de visas y documentos</a></li>
                        </ul>
                    </div>


                    <div class="footer-links">
                        <h4 class="footer-title">Síguenos</h4>
                        <div class="social-link">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>

                        </div>
                    </div>

                </div>

            </div>

        </footer>
    );
}
export default Footer;


/*
<footer className="footer">
  <div className="container">
    <div className="row">
      <div className="col-md-3">
        <h5>Compañía</h5>
        <ul className="list-unstyled">
          <li><a href="#">Acerca de nosotros</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#">Términos y condiciones</a></li>
        </ul>
      </div>
      <div className="col-md-3">
        <h5>Comunidades</h5>
        <ul className="list-unstyled">
          <li><a href="#">Foros</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Eventos</a></li>
        </ul>
      </div>
      <div className="col-md-3">
        <h5>Planes de Spotify</h5>
        <ul className="list-unstyled">
          <li><a href="#">Plan Gratis</a></li>
          <li><a href="#">Plan Premium</a></li>
          <li><a href="#">Plan Familiar</a></li>
        </ul>
      </div>
      <div className="col-md-3">
        <h5>Redes Sociales</h5>
        <ul className="list-unstyled">
          <li><a href="#"><i className="fab fa-facebook"></i> Facebook</a></li>
          <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
          <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
);
}

export default Footer;

*/