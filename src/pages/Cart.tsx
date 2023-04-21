import CartProduct from '../components/UI/CartProduct/CartProduct';
import Logo from '../components/UI/Logo/Logo';
import OvalButton from '../components/UI/buttons/oval_button/OvalButton';
import { getUniqueProducts } from '../scripts/helpers/helpers';
import { CartProducts } from '../scripts/types';

interface ICart {
  cartProducts: CartProducts
}

function Cart({ cartProducts }: ICart) {
  const [cartProduct] = cartProducts;

  const uniqueProducts = getUniqueProducts(cartProduct);
  return (
    <section className='shopping_cart_wrapper'>
      <div className='head'>
        <Logo/>
        <h2>Shopping Cart</h2>
      </div>
      {
        !cartProduct.length
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
                  cartProducts={cartProducts}
                  product={p}
                  key={p.id}
                />)
              }
            </div>
            <div className='summary'>
              <h3>Summary</h3>
              <p>Products: {cartProduct.length}</p>
              <hr/>
              <p>Total: {cartProduct.reduce((acc, p) => acc + p.price, 0)}$</p>
              <hr/>
              <OvalButton>Proceed to Checkout</OvalButton>
            </div>
          </div>
      }
    </section>
  );
}
export default Cart;
