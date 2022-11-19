import "./CarWidget.css" ;
import { AiOutlineShoppingCart } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { UseContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

// Components

import Cart from "./cart";

const CartWidget = () => {
  const { cart, clear, totalPrices } = UseContext();
  const [ items, setItems ] = useState([null])
  const totalItems = cart.reduce((acc, item) => {
    return acc + item.quantity
  }, 0)

  console.log(items)


  useEffect(() => {
    if(cart) setItems(cart) 
    else setItems(null)
  }, [cart])
return (
    <div>
        <AiOutlineShoppingCart data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <span className="p-1">{totalItems}</span>
        </AiOutlineShoppingCart>

        <div class="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h3 class="offcanvas-title" id="offcanvasRightLabel">Productos seleccionados</h3>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            {!items.length 
                ? 
                <div class="offcanvas-body">
                    <h3 className="carritoStyle">Tu carrito esta vacío</h3>
                    <h6 className="carritoStyle">¡Muchos productos te esperan!</h6>
                    </div>
                :
                <div class="offcanvas-body">
                {items.map((item, index)=> {
                    return(
                    <div>
                        <Cart key={index} item={item} />
                    </div>
                    )
                })}
        </div>
        }
        {cart.length
            ? <div className="row">
                  <div className="col-sm-6">
                    <h5 className="margen">Total: ${totalPrices}</h5>
                  </div>
                  <div className="botones">
                    <button className="btn btn-secondary" onClick={clear}>Vaciar</button>
                      <Link to="/purchaseform" className="btn btn-dark">Finalizar</Link>
                  </div>
                </div>
            : <h5 className="carritoStyle">Total: No hay items</h5>
          }
    </div>
</div>

  );
};

export default CartWidget;
