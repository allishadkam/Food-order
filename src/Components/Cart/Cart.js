import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartCTX=useContext(CartContext);

  const totalAmount=`$${cartCTX.totalAmount.toFixed(2)}`;
  const hasItem=cartCTX.items.length>0;
  const cartItemAddHandler=id=>{};
  const cartItemRemoveHandler=item=>{};


  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCTX.items.map((item) => (
        <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)}/>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {hasItem&&<button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;