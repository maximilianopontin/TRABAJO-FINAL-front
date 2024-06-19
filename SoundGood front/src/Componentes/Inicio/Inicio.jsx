import React from "react";
import Reproductor from '../Reproductor musica/Reproductor';
import Footer from "./Componentes/Footer/Footer";
import { Nav } from "../Nav/Nav";

export function Home() {
    return (
        <>
<div>
    <Nav/>
</div>
        <div>
                <Reproductor/>
            </div>
            
            <div>
                <Footer />
            </div>
        </>
    )
}