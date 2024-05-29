
import React from 'react';
import "./Footer.css";
import '@fortawesome/fontawesome-free/css/all.css';

function Footer() {
    return (
        <footer id="footer" class="footer">
            <div class="container">
                <div class="footer-row">
                    <div class="footer-links">
                        <h4 class="footer-title">Compañia</h4>
                        <ul>
                            <li><a href="#">Acerca de</a></li>
                            <li><a href="#">Empleo</a></li>
                            
                        </ul>
                    </div>
                    <div class="footer-links">
                        <h4 class="footer-title">Enlaces Utiles</h4>
                        <ul>
                            <li><a href="#">Plan Premium</a></li>
                            <li><a href="#">Version Gratuita</a></li>
                            <li><a href="#">Ayudas</a></li>
                           
                        </ul>
                    </div>
                    <div class="footer-links">
                        <h4 class="footer-title">Síguenos</h4>
                        <div class="social-link">
                            <a href="https://www.facebook.com/?locale=es_LA"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                            <a href="https://twitter.com/i/flow/signup"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;

