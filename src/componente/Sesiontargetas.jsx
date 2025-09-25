import React from 'react'
import { Link } from 'react-router-dom'
import Transacciones from './Transacciones'
import Bankcards from './Bankcards'
import Saldo from './Saldo'
import Navegacion from './Navegacion'
function Sesiontargetas({ items = [] }) {
  return (
    <span className="card">
      <div className='flex'>
        <div className='one'><p><span className='hello'>Hello, <br /></span>Bryce Turner</p></div>
        <div><p><img src="/Avatar.png" alt="" /></p></div>
      </div>

      <div className='tarjeta'>
        <div>
          <Saldo></Saldo>

          <p>5489-7654-3210-7894 <br /> <span>04/24</span></p>
        </div>
        <div>
          <img src="/Vector.png" alt="" />
          <br /> <br />
          <img src="/Mastercard.png" alt="" />
        </div>
      </div>

      <div className='opciones'>
        <div><Link className='analyze' to="/analyze"><img src="/Analyze.png" alt="" /><br /></Link>Analyze</div>
        <div><img src="/Calendar.png" alt="" /><br />Calendar</div>
        <div><Link to="/productos"><img src="/Document.png" alt="" /></Link><br />Document</div>
        <div><Link to="/Bankcards"><img src="/Collect.png" alt="" /><br /></Link>Collet</div>
      </div>
      <Transacciones items={items} />
      <Navegacion></Navegacion>
    </span>
  )
}

export default Sesiontargetas