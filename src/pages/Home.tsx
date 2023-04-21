import { useState } from 'react';
import { DirectoryBlock } from '../components/DirectoryBlock';
import FiltersBlock from '../components/FiltersBlock';
import Products from '../components/ProductsBlock';
import { minPrice, maxPrice } from '../scripts/global_const';
import { sortProducts } from '../scripts/helpers/helpers';
import { CartProducts, SortValue } from '../scripts/types';
import catalog from '../assets/data/products.json';
import SearchBlok from '../components/SearchBlok';

interface IHomePage {
  cartProducts: CartProducts,
}

function HomePage({ cartProducts }: IHomePage) {
  const [directoryFilter, setDirectoryFilter] = useState({
    categories: [] as string[],
    brand: [] as string[],
  });

  const [sorting, setSorting] = useState({
    sortBy: '',
    show: '15',
    price: {
      min: minPrice,
      max: maxPrice,
    },
  });

  const sortValues: SortValue = Object.assign(directoryFilter, sorting);
  const { sortedProducts, currentBrands } = sortProducts(catalog.products, sortValues);

  return (
    <>
      <SearchBlok
        cartProducts={cartProducts}
      />
      <main>
        <DirectoryBlock
          directoryFilter={directoryFilter}
          setDirectoryFilter={setDirectoryFilter}
          currentBrands={currentBrands}
        />
        <Products
          products={sortedProducts}
          numberOfProductsPerPage={sortValues.show}
          cartProducts={cartProducts}
        />
        <FiltersBlock
          sorting={sorting}
          setSorting={setSorting}
        />
      </main>
    </>
  );
}
export default HomePage;
