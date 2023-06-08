import { useContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Product } from '../scripts/types';
import ProductCard from './UI/ProductCard/ProductCard';
import ProductPopup from './UI/ProductPopup/ProductPopup';
import { showProducts } from '../scripts/helpers/helpers';
import { Context } from '../pages/Home';

interface IProducts {
  products: Product[],
  pageLimit: number,
}

function Products({
  products, pageLimit,
}: IProducts) {
  const cartProducts = useContext(Context).cartProducts!;
  const [popupVisibility, setPopupVisibility] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(0);
  const featuredProducts = showProducts(products, `${pageLimit}`);

  const openPopup = (p: Product) => {
    setPopupVisibility(true);
    setSelectedProduct(p);
  };
  return (
    !products.length
      ? <div className='products'>
        <h3 style={{ marginTop: '30%' }}>Products not found with the specified price.</h3>
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
          cartProduct={cartProducts}
          onClick={() => {
            searchParams.delete('id');
            setSearchParams(searchParams);
            setPopupVisibility(false);
          }}
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
