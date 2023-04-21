import { NavLink } from 'react-router-dom';
import { CartProducts } from '../../../../scripts/types';
import classes from './cart_button.module.scss';

interface ICartButton {
  cartProducts: CartProducts,
}
function CartButton({ cartProducts }: ICartButton) {
  return (
    <NavLink to="/cart" className={classes.cart_button}>
      {!!cartProducts[0].length
        && <div className={classes.product_counter}>
          {cartProducts[0].length}
        </div>
      }
    </NavLink>
  );
}
export default CartButton;
