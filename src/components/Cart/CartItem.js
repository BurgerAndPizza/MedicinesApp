import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { name, quantity, price } = props.item;

  return (
    <li className={classes ['cart-item']}>
      <div>
        <h2>{name}</h2>
        < div className={classes.summary}>
          <span className={classes.price}>$ {price.toFixed(2)}</span>
          <span className={classes.amount}>x {quantity}</span>
        </div>
      </div>
    </li>
  );                                      
};

export default CartItem;