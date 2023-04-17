import { useState } from 'react';
import { Product } from '../scripts/types';
import ProductCard from './UI/ProductCard/ProductCard';
import ProductPopup from './UI/ProductPopup/ProductPopup';

interface IProducts {
  products: Product[]
}

function Products({ products }: IProducts) {
  const [popupVisibility, setPopupVisibility] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(products[1]);

  const openPopup = (p: Product) => {
    setPopupVisibility(true);
    setSelectedProduct(p);
  };
  return (!products.length
    ? <div className='products'>
      <h1 style={{ marginTop: '30%' }}>No products found =(</h1>
    </div>
    : <div className='products'>
      {
        products.map((prod) => {
          return (
            <ProductCard product={prod} key={prod.id} click={openPopup}/>
          );
        })
      }
      {popupVisibility
        && <ProductPopup
          product={selectedProduct}
          popupVisibility={popupVisibility}
          setPopupVisibility={setPopupVisibility}/>
      }
    </div>
  );
}
export default Products;
