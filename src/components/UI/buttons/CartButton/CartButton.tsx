import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import classes from './cart_button.module.scss';
import { Context } from '../../../../pages/Home';

function CartButton() {
  const [cartProducts] = useContext(Context).cartProducts!;
  return (
    <NavLink to="/cart" className={classes.cart_button}>
      {!!cartProducts.length
        && <div className={classes.product_counter}>
          {cartProducts.length}
        </div>
      }
    </NavLink>
  );
}
export default CartButton;
