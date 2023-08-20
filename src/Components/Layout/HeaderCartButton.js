import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {

  const cartCTX= useContext(CartContext);

  const NumberOfCartItems=cartCTX.items.reduce((curNum,item)=>{return(curNum+item.amount)},0)
  return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon/></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{NumberOfCartItems}</span>
      
    </button>
  )
}

export default HeaderCartButton
