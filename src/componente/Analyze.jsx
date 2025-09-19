import React from 'react'
import Transacciones from './Transacciones'
import Navegacion from './Navegacion'
import { Link } from 'react-router-dom'

function Analyze({ items = [] }) {
  return (
    <div>
      <div className="sesion2">
      <div>
        <ul>
          <li className='arrow'>
            <Link to="/"><img src="img/arrow.png" alt="" /></Link>
          </li>
          <li><h2>Analyze</h2></li>
        </ul>
      </div>
      <div><p>Oct-Feb <img src="img/arrowabajo.png" alt="" /></p></div>
      <div>
        <img src="img/Schedule.png" alt="" />
      </div>
      <div><br />Total balance:<h2>$1.924,36</h2></div>
    </div>
      <Transacciones items={items} />
      <Navegacion></Navegacion>
    </div>


  )
}

export default Analyze