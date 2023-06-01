import { useEffect, useState } from 'react';
import CartProduct from '../components/UI/CartProduct/CartProduct';
import Logo from '../components/UI/Logo/Logo';
import ProductPopup from '../components/UI/ProductPopup/ProductPopup';
import OvalButton from '../components/UI/buttons/oval_button/OvalButton';
import { getUniqueProducts } from '../scripts/helpers/helpers';
import { Product } from '../scripts/types';

if (!localStorage.getItem('products')) {
  const product: Product[] = [];
  localStorage.setItem('products', JSON.stringify(product));
}

function Cart() {
  const cartProducts = useState<Product[]>(JSON.parse(localStorage.getItem('products')!));
  const [products] = cartProducts;

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, cartProducts);

  const [popupVisibility, setPopupVisibility] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const openPopup = (p: Product) => {
    setPopupVisibility(true);
    setSelectedProduct(p);
  };

  const uniqueProducts = getUniqueProducts(products);
  return (
    <section className='shopping_cart_wrapper'>
      <div className='head'>
        <Logo/>
        <h2>Shopping Cart</h2>
      </div>
      {
        !products.length
          ? <h1 style={{ textAlign: 'center' }}>Cart is Empty</h1>
          : <div className='shopping_cart'>
            <div className='product_in_cart'>
              <div className='amount'>
                <div className='item'>Item</div>
                <div className='price'>Price</div>
                <div>Quantity</div>
              </div>
              {
                uniqueProducts.map((p) => <CartProduct
                  click={openPopup}
                  cartProducts={cartProducts}
                  product={p}
                  key={p.id}
                />)
              }
            </div>
            <div className='summary'>
              <h3>Summary</h3>
              <p>Products: {products.length}</p>
              <hr/>
              <p>Total: {products.reduce((acc, p) => acc + p.price, 0)}$</p>
              <hr/>
              <OvalButton>Proceed to Checkout</OvalButton>
            </div>
          </div>
      }
      {popupVisibility
        && <ProductPopup
          product={selectedProduct}
          popupVisibility={popupVisibility}
          setPopupVisibility={setPopupVisibility}
        />
      }
    </section>
  );
}
export default Cart;
