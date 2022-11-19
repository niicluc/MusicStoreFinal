import { UseContext } from "../../Context/CartContext";

const Cart = ({ item }) => {
    const { removeItem } = UseContext();
    const handleRemove = () => removeItem(item.id)


return (
    <div className='container'>
        <div className="card" style={{width: "18rem"}}>
            <img src={item?.image} className="card-img-top" alt={item?.name}/> 
        <div className="card-body">
            <h3 className="card-title">{item?.name}</h3>
            <h4>{item?.cd}</h4>
            <p className={item?.categoria}></p>
        </div>
        <div className="card-body">
            <button onClick={handleRemove} className="btn btn-dark">Eliminar</button>
        </div>
        </div>
    </div>
);
};

export default Cart;