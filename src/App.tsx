import './styles/index.scss';
import React, { useState } from 'react';
import Header from './components/UI/Header/Sticky-Header';
import SearchBlok from './components/SearchBlok';
import DirectoryBlock from './components/DirectoryBlock';
import Products from './components/Products';
import FiltersBlock from './components/FiltersBlock';
import catalog from './assets/data/products.json';

function App() {
  // const [products, setProducts] = useState(catalog.products);
  const [selectedCategories, setSelectedCategories] = useState([] as string[]);
  const [selectedBrand, setSelectedBrand] = useState([] as string[]);
  console.log([...selectedBrand, ...selectedCategories]);
  return (
    <>
      <Header/>
      <SearchBlok/>
      <section>
        <DirectoryBlock
          setSelectedBrand={setSelectedBrand}
          setSelectedCategories={setSelectedCategories}
        />
        <Products products={catalog.products}/>
        <FiltersBlock/>
      </section>
    </>
  );
}

export default App;
