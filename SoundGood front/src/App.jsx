import { useState } from 'react'
import './App.css'
import { Inicio } from './Componentes/Inicio/Inicio';

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
           
            <div>
                <Inicio/>
            </div>

        </>
    );
}

export default App