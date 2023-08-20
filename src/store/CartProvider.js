import React from 'react'
import CartContext from './cart-context'
const CartProvider = (props) => {

    const addItemFromCartHandler =item=>{};

    const removeItemFromCartHanler=id=>{};

    const cartContext={
        items:[],
        totalAmount:0,
        addItem:addItemFromCartHandler,
        removeItem:removeItemFromCartHanler
    };
  return (
    <CartContext.Provider value={cartContext}>
        {props.children}      
    </CartContext.Provider>
  )
};

export default CartProvider;
