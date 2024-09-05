import { useContext, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../Store/Cart-context';
import classes from './HeaderCartButton.module.css';
import Modal from '../UI/Modal';
import CartItem from '../Cart/CartItem';

const HeaderCartButton = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const cartItems = (
    <ul className={classes['cart-items']}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          quantity={item.amount}
          price={item.price}
        />
      ))}
    </ul>
  );

  const toggleCartHandler = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  return (
    <>
      <button className={classes.cartBtn} onClick={toggleCartHandler}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
      {isCartOpen && (
        <Modal onClose={toggleCartHandler}>
          {cartItems}
        </Modal>
      )}
    </>
  );
};

export default HeaderCartButton;
