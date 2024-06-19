
import React from 'react';
import "./Footer.css";
import '@fortawesome/fontawesome-free/css/all.css';

//referenciar a archivo nuevo opr cada link arcor, 



function Footer({ redirectToAcercaDe, redirectToPlanPremium, redirectToVersionGratuita, redirectToAyudas }) {

    return (
        <footer id="footer" class="footer">
            <div class="container">
                <div class="footer-row">
                    <div class="footer-links">
                        <h4 class="footer-title">Compañia</h4>
                        <ul>
                            {/*al hacer clic en ellos, se utilizará la función e.preventDefault() para evitar la navegación predeterminada y llamar a las funciones de redirección que actualizan el estado count en el componente App*/}
                            <li><a href="#" onClick={e => { e.preventDefault(); redirectToAcercaDe(); }}>Acerca de</a></li>


                        </ul>
                    </div>
                    <div class="footer-links">
                        <h4 class="footer-title">Enlaces Utiles</h4>
                        <ul>
                            <li><a href="#" onClick={e => { e.preventDefault(); redirectToPlanPremium(); }}>Plan Premium</a></li>
                            <li><a href="#" onClick={e => { e.preventDefault(); redirectToVersionGratuita(); }}>Versión Gratuita</a></li>
                            <li><a href="#" onClick={e => { e.preventDefault(); redirectToAyudas(); }}>Ayudas</a></li>

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

