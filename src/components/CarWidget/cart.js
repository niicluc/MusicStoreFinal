import { UseContext } from "../../Context/CartContext";

const Cart = ({ item }) => {
    const { removeItem } = UseContext();
    const handleRemove = () => removeItem(item.id)


return (
    <div className='container'>
        <div class="card" style={{width: "18rem"}}>
            <img src={item?.image} class="card-img-top" alt={item?.name}/> 
        <div class="card-body">
            <h3 class="card-title">{item?.name}</h3>
            <h4>{item?.cd}</h4>
            <p class={item?.categoria}></p>
        </div>
        <div class="card-body">
            <button onClick={handleRemove} className="btn btn-dark">Eliminar</button>
        </div>
        </div>
    </div>
);
};

export default Cart;