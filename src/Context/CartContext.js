import { createContext, useState, useContext } from "react";


export const CartContext = createContext ();

export const UseContext = () => useContext(CartContext);


export default function CartProvider ({children}) {
    const [cart, setCart] = useState ([]);

    const getFromCart = (id) => {
        return cart.find(ord => ord.id === id);
    }
    
    const isInCart = (id) => {
        return id !== undefined ? getFromCart(id) : undefined;
    }


const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((cartElement) => {
        if (cartElement.id === item.id) {
          return { ...cartElement, quantity: cartElement.quantity + quantity };
        } else return cartElement;
      });
      setCart(newCart);
    } else {
      setCart((e) => [...e, { ...item, quantity }]);
    }
  };
    
    const removeItem = (id) => {
        setCart(cart.filter(e => e.id !== id))
    };

    const clear = () => setCart([]) ; 

    const totalPrices = cart.reduce((acc, total)=> {
        return acc + (total.price * total.quantity)
    },0);
    
    return (
    <CartContext.Provider value = {{cart, addToCart, isInCart, removeItem, clear, totalPrices}}>
        <div> {children} </div>
    </CartContext.Provider>
    );

}
