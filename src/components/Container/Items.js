import React from 'react'
import { Link } from 'react-router-dom'
import "./ItemListContainer.css"

const Items = ({disco}) => {
  return (
    <div>
      <div className="sectionCds">
        <div key={disco?.id} className="card">
          <h3>{disco?.name}</h3>
          <h5>{disco?.cd} </h5>
          <img alt={`Disco ${disco?.name}`} src={disco?.image}/>
          <h4> Precio: ${disco?.price} </h4>
          <Link to={`../item/${disco?.id}`} type="button" className="btn btn-outline-dark">Ver más detalle</Link>
        </div>
      </div>
    </div>
  )
}

export default Items