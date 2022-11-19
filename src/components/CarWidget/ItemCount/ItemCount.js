import "./ItemCount.css" ; 
import { useState } from 'react'
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";

export default function ItemCount({ stock, initial=1, onAdd}) {
    const [value, setValue] = useState(initial);

    const handleIncrement = () => {
        value >= stock || setValue(value + 1);
      };
    
      const handleDecremet = () => {
        value <= 1 || setValue(value - 1);
      };
    
    return (
        <div className="EstructuraGral">
        <div className="row">
            <div className="col-sm">
            <button className="ButtonDetalle" onClick={handleDecremet}> <IoIosRemoveCircle/> </button>
                </div>
                <div className="col-sm">
                <p className="h5">{value}</p>
                </div>
                <div className="col-sm">
                <button className="ButtonDetalle" onClick={handleIncrement}><IoIosAddCircle/></button>
                </div>
                <button type="button" className="margenBtn btn btn-outline-dark" onClick={()=> onAdd(value)}>Agregar al carrito</button>
            </div>
            </div>
    );

}