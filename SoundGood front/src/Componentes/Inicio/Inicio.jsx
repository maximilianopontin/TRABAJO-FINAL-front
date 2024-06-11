import React from "react";
import Reproductor from '../Reproductor musica/Reproductor';
import Footer from "./Componentes/Footer/Footer";


export function Inicio() {
    return (
        <>

        <div>
                <Reproductor />
            </div>
            
            <div>
                <Footer />
            </div>
        </>
    )
}