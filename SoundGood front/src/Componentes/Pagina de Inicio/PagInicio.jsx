
// en esta seccion se muestra la pagina de inicio para registro e inicio de seccion

import React from "react";
import { Logo } from '../../logo/logo';
import './PagInicio.css';
import Reproductor from '../Reproductor musica/Reproductor';
import ReproductorNav from "../Reproductor musica/ReproductorBuscador";

//El componente PagInicio recibe dos props
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
                <ReproductorNav />
            </div>

        </div>

    );

}

export default PagInicio;



