import { useState } from 'react'
import './App.css'
import PagInicio  from './Componentes/Pagina de Inicio/PagInicio';
import { PagRegistro } from './Componentes/Registro/Registro';
import { Logo } from './logo/logo';
import './Componentes/Registro/Registro.css'


function App() {

  const [count, setCount] = useState(0)

  return (
    <>   

    <div> 
     <PagInicio/>
     <PagRegistro/>
     
     </div>
    </>
  )
}

export default App
