import { useState } from 'react'
import './App.css'
import PagInicio from './Componentes/Pagina de Inicio/PagInicio';
//import  PagRegistro  from './Componentes/Registro/Registro';
import {PagInicioSesion} from './Componentes/Iniciar sesion/InicioSesion';
import Footer from "./Componentes/Footer/Footer";
import { Nav } from './Componentes/Nav/Nav';

function App() {
    const [count, setCount] = useState(0);
 
    const redirectToInicioSesion = () => {
        setCount(1);
        // funcion que actualizan el estado count para redireccionar a la página de inicio de sesión
        // setCount(1) cambia el estado para mostrar la página de inicio de sesión
    }

    const redirectToRegistro = () => {
        setCount(2);
        // funcion que actualiza el estado count para redireccionar a la página de registro
        // setCount(2) para mostrar la página de registro.
    }
    const redirectToInicio = () =>{
        setCount(3);
        // funcion que actualiza el estado count para redireccionar a la página de inico
        // setCount(3) para mostrar la pagina de inico.
    }

    return (

           <>
           <Nav/>
            <div>
                {count === 0 && <PagInicio redirectToInicioSesion={redirectToInicioSesion} redirectToRegistro={redirectToRegistro} />} {/* Rediccionamineto de la pagina Inicio a Registro y Inico Sesion*/}
                {count === 1 && <PagInicioSesion redirectToInicio={redirectToInicio}/>} {/* Rediccionamineto de la pagina Inicio sesio a Inico*/}
                {count === 2 && <PagRegistro />} {/* Aquí importamos y usamos el componente PagRegistro */}
            </div>

            <div>
                <Footer />
            </div>

        </>
    );
}

export default App