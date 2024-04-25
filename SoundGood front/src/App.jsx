import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PagInicio  from './Componentes/Pagina de Inicio/PagInicio';


function App() {

  const [count, setCount] = useState(0)

  return (
    <>
    <div> 
     <PagInicio/>
     
     </div>
    </>
  )
}

export default App
