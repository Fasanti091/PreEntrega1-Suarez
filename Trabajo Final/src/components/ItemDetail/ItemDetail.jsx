import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Form } from 'react-bootstrap';

//Importamos el CarritoContext: 
import { CarritoContext } from '../../context/CarritoContext';
//Importo el Hook useContext: 
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, stock, info }) => {
  //1) Creamos un estado con la cantidad de productos agregados: 
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  //useContext: 
  const {agregarProducto} = useContext(CarritoContext);

  //2) Creamos una función manejadora de la cantidad: 

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    //console.log("Productos agregados:" + cantidad);

    //Ahora acá creo un objeto con el item y la cantidad: 
    const item = {id, nombre, precio}; 
    agregarProducto(item, cantidad);
  }

  return (
    <Card className="contenedorItem">
      <div className="row">
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <div className="productoImagenContainer mx-auto">
            <div className="zoom">
              <img src={img} alt={nombre} className="productoImagen" />
            </div>
          </div>
        </div>
        <div className="col-md-8" >
          <Card.Body className="detalleProducto">
            <Card.Title className="tituloProducto">{nombre}</Card.Title>
            <div className="precioIdContainer">
              <Card.Text className="precioProducto">Precio: {precio}</Card.Text>
              <Card.Text>Stock: {stock}</Card.Text>
            </div>
            <br/>
            <Card.Text className="descripcionProducto">{info}</Card.Text>
            <div className="inputCantidad col-md-12">
            { agregarCantidad > 0 ? (<Link className='miBtn' to="/cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)}
            </div>
            <div>
              <br/>
              
            </div>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}

export default ItemDetail