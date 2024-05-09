
import React from "react";
import logo from '../../logo/logo.png';
import './PagInicio.css';
import ReproductorMusica from './ReproductorMusica';
import Footer from "../Footer/Footer";

function PagInicio({ redirectToInicioSesion, redirectToRegistro }) {

    return (
        <div>
            <img src={logo} alt="logo" className="logo" />
            <div>
                <button onClick={redirectToInicioSesion} className="green-button">Iniciar sesión</button>
                <button onClick={redirectToRegistro} className="green-button">Registrate</button>
            </div>
         
        
            <div>
                <ReproductorMusica />
            </div>

            
         
                <Footer />
        
        </div>
      
    );
}

export default PagInicio;


