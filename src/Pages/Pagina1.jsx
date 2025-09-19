import React from 'react'
import Sesiontargetas from '../componente/Sesiontargetas'

function Pagina1() {
  return (
    <div>
        <Sesiontargetas></Sesiontargetas>
        <Transacciones items={items} />
    </div>
  )
}

export default Pagina1