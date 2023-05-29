import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img, info}) => {
  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
        <br/>
        <hr/>
        <h5> {info}</h5>
        <br/>
        <br/>
        <img src= {img} alt={nombre} />
    </div>
  )
}

export default ItemDetail