
import React from 'react';
import "./Footer.css";
import '@fortawesome/fontawesome-free/css/all.css';

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