import { useState } from 'react';
import classes from './search.module.scss';
import catalog from '../../../assets/data/products.json';
import { formatText } from '../../../scripts/helpers/helpers';
import { Product } from '../../../scripts/types';

function Search() {
  const [filter, setFilter] = useState([] as Product[]);
  const [focus, setFocus] = useState(false);

  const { products } = catalog;

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
                <div
                  className='found-product'
                  key={p.id}
                  onClick={() => {
                    console.log(p);
                    setFocus(false);
                  }}
                >
                  <p>{formatText(p.title)}</p>
                </div>
              );
            }))
        }
      </div>
    </div>
  );
}

export default Search;
