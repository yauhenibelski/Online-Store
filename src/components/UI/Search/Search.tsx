import { useEffect, useState } from 'react';
import classes from './search.module.scss';
import { formatText } from '../../../scripts/helpers/helpers';
import ProductPopup from '../ProductPopup/ProductPopup';
import { Catalog, Product } from '../../../scripts/types';
import { FetchProducts } from '../../../api/getProducts';

function Search() {
  const [filter, setFilter] = useState([] as Product[]);
  const [focus, setFocus] = useState(false);
  const [popupVisibility, setPopupVisibility] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    (async () => {
      const response: Catalog = await FetchProducts.getAll();
      setTimeout(() => {
        setProducts(response.products);
      }, 300);
    })();
  }, []);
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const openPopup = (p:Product) => {
    setPopupVisibility(true);
    setSelectedProduct(p);
  };

  const listClass = [classes.list];
  const searchClass = [classes.search];

  const searchProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchVal = e.currentTarget.value.toLocaleLowerCase();

    setFocus(true);
    setFilter(products.filter((p: Product) => {
      const title = p.title.toLocaleLowerCase();
      const brand = p.brand.toLocaleLowerCase();

      return title.includes(searchVal) || brand.includes(searchVal);
    }));
  };

  if (focus) {
    listClass.push(classes.list_active);
    searchClass.push(classes.search_active);
  }
  return (
    <div
      className={searchClass.join(' ')}
      onClick={() => setFocus(false)}
    >
      <input
        type='text'
        placeholder='Search entire store here...'
        onChange={searchProduct}
        onBlur={(e) => {
          e.currentTarget.value = '';
        }}
      />
      <div
        className={listClass.join(' ')}
      >
        {
          !filter.length
            ? <div className='found-product'>
              <h4>Products not found</h4>
            </div>
            : filter.map(((p) => {
              return (
                <>
                  <div
                    className='found-product'
                    key={p.id}
                    onClick={() => {
                      openPopup(p);
                      setFocus(false);
                    }}
                  >
                    <p>{formatText(p.title)}</p>
                  </div>
                </>
              );
            }))
        }
      </div>
      {popupVisibility
        && <ProductPopup
          product={selectedProduct}
          popupVisibility={popupVisibility}
          setPopupVisibility={setPopupVisibility}
        />
      }
    </div>
  );
}

export default Search;
