import { NavLink } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import classes from './cart_button.module.scss';
// import { FetchProducts } from '../../../../api/getProducts';
// import { Product, Catalog } from '../../../../scripts/types';

function CartButton() {
  // const [products, setProducts] = useState<Product[]>([]);
  // useEffect(() => {
  //   (async () => {
  //     const response: Catalog = await FetchProducts.getAll();
  //     setTimeout(() => {
  //       setProducts(response.products);
  //     }, 300);
  //   })();
  // }, []);
  return (
    <NavLink to="/cart" className={classes.cart_button}>
      {/* {!!products[0].length
        && <div className={classes.product_counter}>
          {products[0].length}
        </div>
      } */}
    </NavLink>
  );
}
export default CartButton;
