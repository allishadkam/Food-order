import React from 'react'
import CartContext from './cart-context'
const CartProvider = (props) => {
    const addItemFromCartHandler =item=>{};
    const removeItemFromCartHanler=id=>{}
    const CartContext={
        items:[],
    totalAmount:0,
    addItem:addItemFromCartHandler,
    removeItem:removeItemFromCartHanler
    }
  return (
    <CartContext.Provider>
        {props.children}      
    </CartContext.Provider>
  )
};

export default CartProvider;
