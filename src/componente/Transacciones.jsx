import React from 'react'
import Navegacion from './Navegacion'

function Transacciones({ items }) {
  return (
    <div className='info'>

      <div>
        <div className='dos'>
          <div className='details'>
            <div><h3>Transaction details</h3></div>
            <div><p>Ingresos - Gastos</p></div>
          </div>
          {items.map((item, index) => (
            <div className='ingresos' key={index}>
              <div className='info'><img src={item.imagen} alt="" />
                <span>
                  <p>{item.nombre} <br /> {item.fecha} </p>
                </span></div>
              <div className='texto'>
                <span className='gastos'>{item.dinero} </span>
                <br />{item.hora} </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Transacciones