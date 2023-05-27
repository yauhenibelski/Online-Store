import { useEffect, useMemo, useState } from 'react';
import { DirectoryBlock } from '../components/DirectoryBlock';
import FiltersBlock from '../components/FiltersBlock';
import Products from '../components/ProductsBlock';
import { minPrice, maxPrice } from '../scripts/global_const';
import { sortProducts } from '../scripts/helpers/helpers';
import {
  SortValue, Catalog, Product,
} from '../scripts/types';
import SearchBlok from '../components/SearchBlok';
import { FetchProducts } from '../api/getProducts';

function HomePage() {
  const cartProducts = useState<Product[]>(JSON.parse(localStorage.getItem('products')!));

  useMemo(() => {
    localStorage.setItem('products', JSON.stringify(cartProducts[0]));
  }, cartProducts);

  const [products, setProducts] = useState<Product[]>([]);
  const [isProductsLoading, setProductsLoading] = useState(false);
  const [directoryFilter, setDirectoryFilter] = useState<{categories: string[], brand: string[]}>({
    categories: [],
    brand: [],
  });

  const [sorting, setSorting] = useState({
    sortBy: '',
    show: '15',
    price: {
      min: minPrice,
      max: maxPrice,
    },
  });

  useEffect(() => {
    (async () => {
      setProductsLoading(true);
      const response: Catalog = await FetchProducts.getAll();
      setTimeout(() => {
        setProducts(response.products);
        setProductsLoading(false);
      }, 300);
    })();
  }, [sorting.show]);

  const sortValues: SortValue = Object.assign(directoryFilter, sorting);
  const { sortedProducts, currentBrands } = sortProducts(products, sortValues);

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
          isProductsLoading = {isProductsLoading}
          products={sortedProducts}
          pageLimit={+sorting.show}
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
