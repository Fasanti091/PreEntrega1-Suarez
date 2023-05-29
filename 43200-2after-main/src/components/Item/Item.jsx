import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img className='imgProducto' src={img} alt={nombre} />
        <h3> {nombre} </h3>
        <p>$ {precio} </p>
        {
          //<button className='btnProducto'> Ver Detalles </button>
        }
        <Link to={`/item/${id}`}> Mas Informacion</Link>
    </div>
  )
}

export default Item