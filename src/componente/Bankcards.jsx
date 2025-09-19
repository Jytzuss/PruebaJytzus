import React from 'react'
import Navegacion from './Navegacion'

function Bankcards() {
    const cards = [
        {
            imagen1: "img/Vector.png",
            imagen2: "img/Mastercard.png",
            ncuenta: "5489-7654-3210-7894",
            fecha: "04/24",
            balance: "$1.924,35"
        },
        {
            imagen1: "img/Vector.png",
            imagen2: "img/Mastercard.png",
            ncuenta: "8529-1835-6562-6536",
            fecha: "24/23",
            balance: "$2.142,66"
        },
        {
            imagen1: "img/Vector.png",
            imagen2: "img/Mastercard.png",
            ncuenta: "1245-3647-7319-8021",
            fecha: "15/22",
            balance: "$5.354,15"
        }
    ]

    return (
        <div>
            
            <div className='bankname'>
                <div><h3>Bank Cards</h3></div>
                <div><img src="img/Avatar.png" alt="" /></div>
            </div>

            
            <div className="cards-container">
                {cards.map((item, index) => (
                    <div key={index} className='hola'>
                        
                        <div className='balance'>
                            <p>
                                Balance <br />
                                <span className='nbalance'>{item.balance}</span>
                            </p>
                        </div>

                        
                        <div className='cards'>
                            <div className='targetavertical'>
                                <div className='logotarget'>
                                    <img src={item.imagen1} alt="logo" />
                                    <img src={item.imagen2} alt="mastercard" />
                                </div>
                                <div className='ncuenta'>
                                    <h2>{item.ncuenta}</h2>
                                    <p>{item.fecha}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Navegacion></Navegacion>
        </div>
    )
}

export default Bankcards
