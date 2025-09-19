import React, { useState } from 'react'

function Saldo() {
    const [count, setCount] = useState(1000);
  return (
    <div>
       <h2> $ {count}</h2>
        <button className='contador' onClick={() => setCount((count) => count + 1000)}>
            Añadir Fondos
        </button>
        
    </div>
  )
}

export default Saldo