import React, { useReducer } from 'react'
import CartContext from './cart-context'

const  defaultCartState={
  items:[],
  totalAmount:0
}
const catrRedeucer=(state,action)=>{
  if(action.type==="ADD"){
    const updatedItems=state.items.concat(action.item);
    const updatedTotalAmount=state.totalAmount + action.item.price * action.item.amount;
    return{
      items:updatedItems,
      totalAmount:updatedTotalAmount
    }
  }
  return defaultCartState
}


const CartProvider = (props) => {
  const [cartstate,deispatchCartAction]=useReducer(catrRedeucer,defaultCartState)

    const addItemFromCartHandler =(item)=>{
      deispatchCartAction({type:'ADD',item:item})
    };

    const removeItemFromCartHanler=(id)=>{
      deispatchCartAction({type:"REMOVE",id:id})
    };

    const cartContext={
        items:cartstate.items,
        totalAmount:cartstate.totalAmount,
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
