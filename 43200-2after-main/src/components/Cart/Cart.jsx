import React, { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import '../Cart/Cart.css';
const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      <h2>Carrito de compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Imagen</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.nombre}</td>
                <td>
                  {item.cantidad}
                </td>
                <td>${item.precio}</td>
                <td>
                  <img src={item.img} alt={item.nombre} className="product-image" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;