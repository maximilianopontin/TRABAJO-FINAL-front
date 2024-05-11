import { useState } from 'react'
import './App.css'
import { PagInicioSesion } from './Componentes/Iniciar sesion/InicioSesion';
import './Componentes/Iniciar sesion/InicioSesion.css'


function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <PagInicioSesion />
      </div>
    </>
  )
}

export default App
