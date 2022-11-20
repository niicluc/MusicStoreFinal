import "./ItemDetailContainer.css" ;
import { Link } from 'react-router-dom';
import ItemCount from '../components/CarWidget/ItemCount/ItemCount';
import { UseContext } from '../Context/CartContext';



const ItemDetailContainer = ({disco}) => {
const {addToCart} = UseContext()
const onAdd= count => {
  addToCart(disco, count)
}




    return(
    <div>
        <div className="Container-General">
          <div className="card">
            <h2>{disco?.name}</h2>
            <img alt={`Disco ${disco?.name}`} src={disco?.reverso}/>
            <h4>Datos tecnicos:</h4>
            <h4>Fecha de lanzamiento:</h4> <p>{disco?.fecha}</p>
            <h4>Formato:</h4> <p>{disco?.formato}</p>
            <h4>Sello:</h4> <p>{disco?.sello}</p>
            <h4>Duración:</h4> <p>{disco?.duracion}</p>
            <p>En stock: Si</p>
            <ItemCount stock={disco?.cantidad} onAdd={onAdd}/>
            <Link to="/" type="button" className="btn btn-outline-dark">Volver</Link>
          </div>
        </div>
          
          </div>
  )
}

export default ItemDetailContainer