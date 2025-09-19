import { useState } from 'react'
import './App.css'
import Transacciones from './componente/Transacciones';
import Navegacion from './componente/Navegacion';
import Analyze from './componente/Analyze';
import Sesiontargetas from './componente/Sesiontargetas';
import Bankcards from './componente/Bankcards';

import { Route, Routes } from 'react-router-dom';
import Pagina3 from './Pages/Pagina3';
import Pagina4 from './Pages/Pagina4';
import Producto from './componente/Producto';

function App() {
  const [count, setCount] = useState(0);

  const Transaccionesdata = [
    {
      imagen: "img/Logo1.png",
      nombre: "Dribbble",
      fecha: "13 Jan 22",
      dinero: "-$102,24",
      hora: "3:24 PM",
    },
    {
      imagen: "img/Logo2.png",
      nombre: "Amazon Shopping",
      fecha: "12 Jan 22",
      dinero: "$32.24",
      hora: "2:35 PM",
    },
    {
      imagen: "img/Logo3.png",
      nombre: "Youtube TV",
      fecha: "9 Jan 22",
      dinero: "-$20",
      hora: "6:10 PM",
    },
    {
      imagen: "img/Logo4.png",
      nombre: "Paypal",
      fecha: "7 Jan 22",
      dinero: "$800",
      hora: "7:00 PM",
    }
  ]

  return (
    <>
      <div className='app'>
         <Routes>
          <Route path='/productos' element={<Pagina4/>}/>
        <Route path="/" element={<Sesiontargetas items={Transaccionesdata}/>} />
        <Route
          path="/analyze"
          element={<Analyze items={Transaccionesdata} />}/>

        <Route path="/bankcards" element={<Pagina3 />} />
        <Route path="/inicio" element={<Sesiontargetas items={Transaccionesdata} />} />
      </Routes>
      </div>
    </>
  )
}

export default App
