import { useState } from 'react'
import './App.css'
import PagInicio from './Componentes/Pagina de Inicio/PagInicio';
import { PagRegistro } from './Componentes/Registro/Registro';
import { PagInicioSesion } from './Componentes/Iniciar sesion/InicioSesion';
import Footer from "./Componentes/Footer/Footer"
import './Componentes/Iniciar sesion/InicioSesion.css'
import AcercaDe from './Componentes/Footer/AcercaDe';
import PlanPremium from './Componentes/Footer/PlanPremium';
import VersionGratuita from './Componentes/Footer/VersionGratuita';
import Ayudas from './Componentes/Footer/Ayudas';
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

    const redirectToHome = () => {
        setCount(3);
        // funcion que actualiza el estado count para redireccionar a la página de inico
        // setCount(3) para mostrar la pagina de inico.
    }
    // Funciones para actualizar el estado y redirigir a las diferentes páginas

    const redirectToAcercaDe = () => {
        setCount(4);

    }
    const redirectToPlanPremium = () => {
        setCount(5);
    }
    const redirectToVersionGratuita = () => {
        setCount(6);
    }
    const redirectToAyudas = () => {
        setCount(7);
    }
    return (

        <>
         <div>
            <Nav/>
         </div>

            <div>

                {count === 0 && <PagInicio redirectToInicioSesion={redirectToInicioSesion} redirectToRegistro={redirectToRegistro} />} {/* Rediccionamineto de la pagina Inicio a Registro y Inico Sesion*/}
                {count === 1 && <PagInicioSesion redirectToHome={redirectToHome} />} {/* Rediccionamineto de la pagina Inicio sesio a Home*/}
                {count === 2 && <PagRegistro redirectToInicioSesion={redirectToInicioSesion} />} {/* Aquí importamos y usamos el componente PagRegistro */}
                {count === 4 && <AcercaDe redirectToHome={redirectToHome} />}
                {count === 5 && <PlanPremium redirectToHome={redirectToHome} />}
                {count === 6 && <VersionGratuita redirectToHome={redirectToHome} />}
                {count === 7 && <Ayudas redirectToHome={redirectToHome} />}
            </div>
           

            <div>
                <Footer redirectToAcercaDe={redirectToAcercaDe}
                    redirectToPlanPremium={redirectToPlanPremium}
                    redirectToVersionGratuita={redirectToVersionGratuita}
                    redirectToAyudas={redirectToAyudas}
                />{/* Renderiza el componente del footer con las funciones de redirección */}
            </div>

        </>
    );

}

export default App