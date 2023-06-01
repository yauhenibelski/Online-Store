import { useEffect, useState } from 'react';
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

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(cartProducts[0]));
  }, cartProducts);

  const [products, setProducts] = useState<Product[]>([]);
  // const [isProductsLoading, setProductsLoading] = useState(false);

  const [sorting, setSorting] = useState<SortValue>({
    categories: [],
    brand: [],
    sortBy: '',
    show: '15',
    minPrice,
    maxPrice,
  });

  useEffect(() => {
    (async () => {
      // setProductsLoading(true);
      const response: Catalog = await FetchProducts.getAll();
      setTimeout(() => {
        setProducts(response.products);
        // setProductsLoading(false);
      }, 300);
    })();
  }, [sorting.show]);

  const { sortedProducts, currentBrands } = sortProducts(products, sorting);

  return (
    <>
      <SearchBlok
      />
      <main>
        <DirectoryBlock
          currentBrands={currentBrands}
          products={products}
        />
        <Products
          products={sortedProducts}
          pageLimit={+sorting.show}
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
