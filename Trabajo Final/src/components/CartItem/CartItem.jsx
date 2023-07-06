import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext);

  return (
    <div>
        <h6> {item.nombre} </h6>
        <h6> Cantidad: {cantidad} </h6>
        <h6> Precio: $ {item.precio} </h6>
        <button className="miBtn" onClick={()=> eliminarProducto(item.id)}> Eliminar </button>
        <hr />
    </div>
  )
}

export default CartItem