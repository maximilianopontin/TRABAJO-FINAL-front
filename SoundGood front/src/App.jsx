import { useState } from 'react'
import './App.css'
import { PagInicioSesion } from './Componentes/Iniciar sesion/InicioSesion';
import './Componentes/Iniciar sesion/InicioSesion.css'
import { Nav } from './Componentes/Nav/nav';


function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Nav/>
        <PagInicioSesion />
      </div>
    </>
  )
}

export default App
