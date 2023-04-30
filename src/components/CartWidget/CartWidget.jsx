// eslint-disable-next-line no-unused-vars
import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "../assets/carrito.png";
  return (  
    <div>
        <img src={imgCarrito} alt="Carrito de compras" className='imgCarrito'/>
    </div>
  )
}

export default CartWidget