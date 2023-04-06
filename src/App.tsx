import './styles/index.scss';
import React, { useState } from 'react';
import Header from './components/UI/Header/Sticky-Header';
import SearchBlok from './components/SearchBlok';
import Products from './components/Products';
import FiltersBlock from './components/FiltersBlock';
import catalog from './assets/data/products.json';
import { DirectoryBlock } from './components/DirectoryBlock';
import { maxPrice, minPrice } from './scripts/global_const';

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
  console.log(sortValues);
  return (
    <>
      <Header/>
      <SearchBlok/>
      <section>
        <DirectoryBlock
          directoryFilter={directoryFilter}
          setDirectoryFilter={setDirectoryFilter}
        />
        <Products products={catalog.products}/>
        <FiltersBlock
          sorting={sorting}
          setSorting={setSorting}
        />
      </section>
    </>
  );
}

export default App;
