import React from 'react'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react';

const Cart = () => {

  const { cart, clearCart, removeItem} = useContext(CartContext);

  return (
    <div>
      <h1>Tu Carrito</h1>
      {
        cart.map((item) => (
          <div key={item.id}>
              <h4>{item.title}</h4>
              <p>Cantidad: {item.count}</p>
              <h5>Precio: ${item.price * item.count}</h5>
              <button 
                  className="btn btn-danger"
                  onClick={() => removeItem(item.id)}
              >
                Eliminar producto
              </button>
              <hr/>
          </div>
      ))
      
    }
    <button className="btn btn-danger" onClick={clearCart} disabled={cart.length === 0}>Vaciar carrito</button>
    </div>
  )
}

export default Cart