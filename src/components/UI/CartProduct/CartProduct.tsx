import { useState } from 'react';
import { CartProducts, Product } from '../../../scripts/types';
import classes from './cart_product.module.scss';

interface ICartProduct {
  product: Product,
  cartProducts: CartProducts,
}

function CartProduct({ product, cartProducts }: ICartProduct) {
  const [cartProduct, setCartProduct] = cartProducts;
  const [quantity, setQuantity] = useState('');

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
      <div className={classes.quantity_blok}>
        <span className={classes.in_stock}>In stock: {product.stock}</span>
        <input
          type='number'
          placeholder='1'
          value={quantity}
          min='1'
          max={product.stock}
          onChange={(e) => {
            const value = +e.currentTarget.value;

            if (value > product.stock) {
              setQuantity(`${product.stock}`);
            } else {
              setQuantity(`${value}`);
            }
          }}
          onBlur={(e) => {
            let value = +e.currentTarget.value;

            if (value < 1) {
              value = 1;
              setQuantity('1');
            } else if (value > product.stock) {
              value = product.stock;
              setQuantity(`${product.stock}`);
            }

            const otherProducts = [...cartProduct].filter((p) => p.id !== product.id);
            const productQuantity = new Array(value).fill(product);

            setCartProduct([
              ...otherProducts, ...productQuantity,
            ]);
          }}
          className={classes.quantity}
        />
      </div>
      <button
        onClick={() => setCartProduct([
          ...[...cartProduct].filter((p) => p.id !== product.id),
        ])}
      >
        x
      </button>
    </div>
  );
}

export default CartProduct;
