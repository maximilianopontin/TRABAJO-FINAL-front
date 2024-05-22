import { useState } from 'react'
import './App.css'
import { PagInicioSesion } from './Componentes/Iniciar sesion/InicioSesion';
import './Componentes/Iniciar sesion/InicioSesion.css'
import { Nav } from './Componentes/Nav/nav';
import Footer from './Componentes/Footer/Footer';


function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Nav/>
      <PagInicioSesion />
      </div>
      <div>
        <Footer/>
      </div>
    </>
  )
}

export default App

// Eliminar Nav y canciones jsno para subir a main