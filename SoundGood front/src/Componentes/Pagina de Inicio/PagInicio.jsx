
import React from "react";
import logo from '../../logo/logo.png';
import './PagInicio.css';
import Reproductor from '../Reproductor musica/Reproductor';

function PagInicio({ redirectToInicioSesion, redirectToRegistro }) {

    return (
        <div>
            <img src={logo} alt="logo" className="logo" />
            <div>
                <button onClick={redirectToInicioSesion} className="green-button">Iniciar sesión</button>
                <button onClick={redirectToRegistro} className="green-button">Registrate</button>
            </div>

         
            <div>
                <Reproductor />
            </div>
        
        </div>
      
    );
}

export default PagInicio;


