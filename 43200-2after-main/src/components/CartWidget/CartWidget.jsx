import React, { useContext } from "react";
import "./CartWidget.css";
import { Image, Badge } from 'react-bootstrap';
import { CartContext } from '../CartContext/CartContext';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  const imgCarrito = "https://cdn-icons-png.flaticon.com/512/7499/7499841.png";

  return (
    <div className="cart-container">
      <Image
        className="d-inline-block align-text-top imgCarrito img-fluid"
        src={imgCarrito}
        alt="Carrito de Compras"
      />
      <Badge className="m-0 cart-counter" pill bg="primary">
        {totalQuantity}
      </Badge>
    </div>
  );
};

export default CartWidget;