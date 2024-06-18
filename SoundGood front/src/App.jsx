import { useState } from 'react'
import './App.css'
import { PagInicioSesion } from './Componentes/Iniciar sesion/InicioSesion';
import './Componentes/Iniciar sesion/InicioSesion.css'
//import { Nav } from './Componentes/Nav/nav';
import Footer from './Componentes/Footer/Footer';
import AcercaDe from './Componentes/Footer/AcercaDe';
import Empleo from './Componentes/Footer/Empleo';
import PlanPremium from './Componentes/Footer/PlanPremium';
import VersionGratuita from './Componentes/Footer/VersionGratuita';
import Ayudas from './Componentes/Footer/Ayudas';

function App() {

  const [count, setCount] = useState(0);
  // Funciones para actualizar el estado y redirigir a las diferentes páginas
  const redirectToHome = () => setCount(3);
  const redirectToAcercaDe = () => setCount(4);
  const redirectToEmpleo = () => setCount(5);
  const redirectToPlanPremium = () => setCount(6);
  const redirectToVersionGratuita = () => setCount(7);
  const redirectToAyudas = () => setCount(8);
  return (
    <>
      <div>
        {/*<Nav/>*/}
        {/*<PagInicioSesion />*/}
      </div>

      <div>

        {count === 4 && <AcercaDe redirectToHome={redirectToHome} />}
        {count === 5 && <Empleo redirectToHome={redirectToHome} />}
        {count === 6 && <PlanPremium redirectToHome={redirectToHome} />}
        {count === 7 && <VersionGratuita redirectToHome={redirectToHome} />}
        {count === 8 && <Ayudas redirectToHome={redirectToHome} />}
      </div>
      <div>
        <Footer redirectToAcercaDe={redirectToAcercaDe}
          redirectToEmpleo={redirectToEmpleo}
          redirectToPlanPremium={redirectToPlanPremium}
          redirectToVersionGratuita={redirectToVersionGratuita}
          redirectToAyudas={redirectToAyudas}
        />{/* Renderiza el componente del footer con las funciones de redirección */}
      </div>
    </>
  )
}

export default App

// Eliminar Nav y canciones jsno para subir a main