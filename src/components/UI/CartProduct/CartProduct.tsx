import { Product } from '../../../scripts/types';
import classes from './cart_product.module.scss';

interface ICartProduct {
  product: Product
}

function CartProduct({ product }: ICartProduct) {
  return (
    <div className={classes.product}>
      <div className={classes.about_product}>
        <img src={product.thumbnail} alt=""/>
        <p>
          {product.title}
          <br/>
          {product.description}
        </p>
      </div>
      <p className={classes.product_price}>
        {product.price}$
      </p>
      <input type='number'
        className={classes.qty}
        value={1}/>
      {/* <button>X</button> */}
    </div>
  );
}

export default CartProduct;
