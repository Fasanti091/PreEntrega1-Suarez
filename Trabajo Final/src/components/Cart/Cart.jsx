import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "../Cart/Cart.css";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(
    CarritoContext
  );

  if (cantidadTotal === 0) {
    return (
      <div className="cart-empty">
        <br />
        <h2>No hay productos en el carrito</h2>
        <Link className="miBtn" to="/">
          Ver Productos
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Tu Carrito</h2>
      <div className="cart-items">
        {carrito.map((producto) => (
          <CartItem key={producto.id} {...producto} />
        ))}
      </div>
      <div className="cart-summary">
        <div className="summary-row">
          <span className="summary-label">Total:</span>
          <span className="summary-value">${total}</span>
        </div>
        <div className="summary-row">
          <span className="summary-label">Cantidad total:</span>
          <span className="summary-value">{cantidadTotal}</span>
        </div>
        <div className="cart-buttons">
          <button className="miBtn" onClick={() => vaciarCarrito()}>
            Vaciar carrito
          </button>
        </div>
        <Link className="miBtn" to="/checkout">
            Finalizar Compra
          </Link>
      </div>
    </div>
  );
};

export default Cart;
