import { createContext, useEffect, useState } from 'react';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import { DirectoryBlock } from '../components/DirectoryBlock';
import FiltersBlock from '../components/FiltersBlock';
import Products from '../components/ProductsBlock';
import { getMaxMinPrice, sortProducts } from '../scripts/helpers/helpers';
import {
  SortValue, Catalog, Product, ContextType,
} from '../scripts/types';
import SearchBlok from '../components/SearchBlok';
import { FetchProducts } from '../api/getProducts';

export const Context = createContext<ContextType>({});

function HomePage() {
  const categoryLoader = useLoaderData() as { category: string };
  const [products, setProducts] = useState<Product[]>([]);
  const [cartProducts] = useState<Product[]>(JSON.parse(localStorage.getItem('products')!));
  const [searchParams] = useSearchParams();
  // const [isProductsLoading, setProductsLoading] = useState(false);
  const [sorting, setSorting] = useState<SortValue>({
    categories: categoryLoader ? [categoryLoader.category] : [],
    brand: [],
    sortBy: '',
    pageLimit: '15',
    minPrice: searchParams.has('minPrice') ? +searchParams.get('minPrice')! : 0,
    maxPrice: searchParams.has('maxPrice') ? +searchParams.get('maxPrice')! : 0,
  });

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(cartProducts));
  }, cartProducts);

  useEffect(() => {
    (async () => {
      // setProductsLoading(true);
      const response: Catalog = await FetchProducts.getAll();
      setTimeout(() => {
        setProducts(response.products);
        setSorting({
          ...sorting,
          maxPrice: sorting.maxPrice > 0 ? sorting.maxPrice : getMaxMinPrice(response.products, 'maxPrice'),
          minPrice: sorting.minPrice > 0 ? sorting.minPrice : getMaxMinPrice(response.products, 'minPrice'),
        });
        // setProductsLoading(false);
      }, 300);
    })();
  }, []);

  const { sortedProducts, currentBrands } = sortProducts(products, sorting);

  useEffect(() => {
    setSorting({
      ...sorting,
      categories: categoryLoader ? [categoryLoader.category] : [],
    });
  }, [categoryLoader]);

  return (
    <>
      <Context.Provider
        value={{
          sorting,
          maxPriceInCatalog: getMaxMinPrice(products, 'maxPrice'),
          minPriceInCatalog: getMaxMinPrice(products, 'minPrice'),
          products,
          setSorting,
        }}
      >
        <SearchBlok/>
        <main>
          <DirectoryBlock
            currentBrands={currentBrands}
            products={products}
          />
          <Products
            products={sortedProducts}
            pageLimit={+sorting.pageLimit}
          />
          <FiltersBlock
            sorting={sorting}
            setSorting={setSorting}
          />
        </main>
      </Context.Provider>
    </>
  );
}
export default HomePage;
