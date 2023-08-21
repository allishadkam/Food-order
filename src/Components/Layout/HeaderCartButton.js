import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
  const [btnIsHighlighted,setbtnIsHighlighted]=useState(false)
  const cartCTX= useContext(CartContext);
const {items}=cartCTX;
  const NumberOfCartItems=items.reduce((curNum,item)=>{return(curNum+item.amount)},0)

  const btnclasses=`${classes.button} ${ btnIsHighlighted? classes.bump:''}`

  

  useEffect(()=>{
    if(items.length===0){
      return;
    }
    setbtnIsHighlighted(true)


   const timer= setTimeout(()=>{
      setbtnIsHighlighted(false);
    },300)

    return ()=>{
      clearTimeout(timer);
    }
  },[items])


  return (
    <button className={btnclasses} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon/></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{NumberOfCartItems}</span>
      
    </button>
  )
}

export default HeaderCartButton
