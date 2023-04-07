import './styles/index.scss';
import React, { useState } from 'react';
import Header from './components/UI/Header/Sticky-Header';
import SearchBlok from './components/SearchBlok';
import Products from './components/Products';
import FiltersBlock from './components/FiltersBlock';
import catalog from './assets/data/products.json';
import { DirectoryBlock } from './components/DirectoryBlock';
import { maxPrice, minPrice } from './scripts/global_const';
import { Products as ProductsType } from './scripts/types';
import { formatText, getNameDirectory } from './scripts/helpers/helpers';

function App() {
  const [directoryFilter, setDirectoryFilter] = useState({
    categories: [] as string[],
    brand: [] as string[],
  });
  const [sorting, setSorting] = useState({
    sortBy: '',
    show: '',
    price: {
      min: minPrice,
      max: maxPrice,
    },
  });
  const sortValues = Object.assign(directoryFilter, sorting);

  function sortProducts(cataloG: ProductsType, sortValue: {
    categories: string[];
    brand: string[];
  } & {
    sortBy: string;
    show: string;
    price: {
      min: number;
      max: number;
    }
  }) {
    const { products } = cataloG;

    const category = products.filter((p) => {
      return !sortValue.categories.length
        ? p
        : sortValue.categories.includes(formatText(p.category));
    });

    const brand = category.filter((p) => {
      return !sortValue.brand.length
        ? p
        : sortValue.brand.includes(formatText(p.brand));
    });

    const price = {
      products: [...brand.filter((p) => p.price >= sortValue.price.min
      && p.price <= sortValue.price.max)],
    };

    // return price;

    return {
      sortedProducts: price.products,
      currentBrands: !getNameDirectory(price, 'brand').length
        ? ['No Brands'] : getNameDirectory(price, 'brand'),
    };
  }
  const sorted = sortProducts(catalog, sortValues);

  return (
    <>
      <Header/>
      <SearchBlok/>
      <section>
        <DirectoryBlock
          directoryFilter={directoryFilter}
          setDirectoryFilter={setDirectoryFilter}
          currentBrands={sorted.currentBrands}
        />
        <Products products={sorted.sortedProducts}/>
        <FiltersBlock
          sorting={sorting}
          setSorting={setSorting}
        />
      </section>
    </>
  );
}

export default App;
