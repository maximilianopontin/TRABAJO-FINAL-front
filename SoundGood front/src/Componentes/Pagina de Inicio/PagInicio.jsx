

import React from "react";
import { Logo } from '../../logo/logo';
import './PagInicio.css';
import Reproductor from '../Reproductor musica/Reproductor';

function PagInicio({ redirectToInicioSesion, redirectToRegistro }) {


    return (
        <div>
            <div>
                <Logo />
            </div>

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


