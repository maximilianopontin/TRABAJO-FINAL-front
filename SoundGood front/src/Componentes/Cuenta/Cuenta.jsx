import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import './cuenta.css'
import Footer from "../Footer/Footer";

//El componente PagInicio recibe dos props
function Cuenta() {
    return (
        <div>
            <div> 
                <Nav/>
            </div>
            <div className="cuenta-btn">
                <Link to="/editar-perfil">
                    <button className="btn">Editar perfil</button>
                </Link>

                <Link to="/premium">
                    <button className="btn">Acceder a Premium</button>
                </Link>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default Cuenta;