import { useState } from 'react'
import './App.css'
import PagInicio  from './Componentes/Pagina de Inicio/PagInicio';
//import { PagRegistro } from './Componentes/Registro/Registro';
import { InicioSesion } from './Componentes/Iniciar sesion/InicioSesion';


function App() {
    const [count, setCount] = useState(0);

    const redirectToInicioSesion = () => {
      setCount(1);
        // Lógica para redireccionar a la página de inicio de sesión
    }

    const redirectToRegistro = () => { 
      setCount(2);
        // Lógica para redireccionar a la página de registro
    }

    return (
        <>
            <div>
                {count === 0 && <PagInicio redirectToInicioSesion={redirectToInicioSesion} redirectToRegistro={redirectToRegistro} />}
                {count === 1 && <InicioSesion />} 
                {count === 2 && <PagRegistro />} {/* Aquí importamos y usamos el componente PagRegistro */}
            </div>
        </>
    );
}

export default App