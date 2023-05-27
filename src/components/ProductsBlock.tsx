import { useState } from 'react';
import { CartProducts, Product } from '../scripts/types';
import ProductCard from './UI/ProductCard/ProductCard';
import ProductPopup from './UI/ProductPopup/ProductPopup';
import { showProducts } from '../scripts/helpers/helpers';

interface IProducts {
  products: Product[],
  pageLimit: number,
  cartProducts: CartProducts,
  isProductsLoading: boolean,
}

function Products({
  products, pageLimit, cartProducts, isProductsLoading,
}: IProducts) {
  const [popupVisibility, setPopupVisibility] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [page, setPage] = useState(0);

  const notice = isProductsLoading
    ? 'Please wait...'
    : 'Products not found with the specified price.';

  const featuredProducts = showProducts(products, `${pageLimit}`);

  const openPopup = (p: Product) => {
    setPopupVisibility(true);
    setSelectedProduct(p);
  };
  return (
    !products.length
      ? <div className='products'>
        <h3 style={{ marginTop: '30%' }}>{notice}</h3>
      </div>
      : <div className='products'>
        {
          ((prod, n) => (
            prod.length > n
              ? prod[n]
              : (
                setPage(0),
                prod[0]
              ))
          )(featuredProducts, page).map((prod) => {
            return (
              <ProductCard
                product={prod}
                key={prod.id}
                click={openPopup}
              />
            );
          })
        }
        {popupVisibility
        && <ProductPopup
          product={selectedProduct}
          popupVisibility={popupVisibility}
          setPopupVisibility={setPopupVisibility}
          cartProducts={cartProducts}
        />
        }
        {
          products.length > +pageLimit
          && <div
            className='pages'
          >
            {
              featuredProducts.map((e, i) => {
                return (
                  <span key={`${i}`} onClick={() => {
                    setPage(i);
                  }}>
                    <input type="radio" name='page' id={`${i}`} defaultChecked={i === page}/>
                    <label htmlFor={`${i}`}>{i + 1}</label>
                  </span>
                );
              })
            }
          </div>
        }
      </div>
  );
}
export default Products;