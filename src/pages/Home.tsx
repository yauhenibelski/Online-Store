import { useState } from 'react';
import { DirectoryBlock } from '../components/DirectoryBlock';
import FiltersBlock from '../components/FiltersBlock';
import Products from '../components/Products';
import { minPrice, maxPrice } from '../scripts/global_const';
import { sortProducts } from '../scripts/helpers/helpers';
import { SortValue } from '../scripts/types';
import catalog from '../assets/data/products.json';

function HomePage() {
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

  const sortValues: SortValue = Object.assign(directoryFilter, sorting);

  const { sortedProducts, currentBrands } = sortProducts(catalog.products, sortValues);
  console.log(currentBrands);

  return (
    <main>
      <DirectoryBlock
        directoryFilter={directoryFilter}
        setDirectoryFilter={setDirectoryFilter}
        currentBrands={currentBrands}
      />
      <Products products={sortedProducts}/>
      <FiltersBlock
        sorting={sorting}
        setSorting={setSorting}
      />
    </main>
  );
}
export default HomePage;