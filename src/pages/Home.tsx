import { createContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DirectoryBlock } from '../components/DirectoryBlock';
import FiltersBlock from '../components/FiltersBlock';
import Products from '../components/ProductsBlock';
import { getMaxMinPrice, sortProducts } from '../scripts/helpers/helpers';
import {
  SortValue, Catalog, Product, ContextType,
} from '../scripts/types';
import SearchBlok from '../components/SearchBlok';
import { FetchProducts } from '../api/getProducts';
import ProductPopup from '../components/UI/ProductPopup/ProductPopup';

export const Context = createContext<ContextType>({});

function HomePage() {
  const cartProducts = useState<Product[]>(JSON.parse(localStorage.getItem('products')!));
  const [selectedProduct, setSelectedProduct] = useState<Product | null>();
  const [isProductsLoading, setProductsLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [searchParams] = useSearchParams();

  const [sorting, setSorting] = useState<SortValue>({
    categories: searchParams.has('category') ? [searchParams.get('category')!] : [],
    brand: searchParams.has('brand') ? searchParams.get('brand')!.split(',') : [],
    sortBy: searchParams.has('sortBy') ? searchParams.get('sortBy')! : '',
    pageLimit: searchParams.has('pageLimit') ? searchParams.get('pageLimit')! : '15',
    minPrice: searchParams.has('minPrice') ? +searchParams.get('minPrice')! : 0,
    maxPrice: searchParams.has('maxPrice') ? +searchParams.get('maxPrice')! : 0,
  });

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(cartProducts[0]));
  }, [cartProducts[0]]);

  useEffect(() => {
    (async () => {
      const response: Catalog = await FetchProducts.getAll();
      const product = searchParams.has('id')
        ? await FetchProducts.getSingleProduct(+searchParams.get('id')!)
        : null;

      setTimeout(() => {
        setProducts(response.products);
        setSorting({
          ...sorting,
          maxPrice: sorting.maxPrice > 0 ? sorting.maxPrice : getMaxMinPrice(response.products, 'maxPrice'),
          minPrice: sorting.minPrice > 0 ? sorting.minPrice : getMaxMinPrice(response.products, 'minPrice'),
        });
        setSelectedProduct(product);
        setProductsLoading(false);
      }, 300);
    })();
  }, []);

  const { sortedProducts, currentBrands } = sortProducts(products, sorting);

  return (
    <>
      <Context.Provider
        value={{
          sorting,
          maxPriceInCatalog: getMaxMinPrice(products, 'maxPrice'),
          minPriceInCatalog: getMaxMinPrice(products, 'minPrice'),
          products,
          setSorting,
          cartProducts,
        }}
      >
        <SearchBlok/>
        {
          isProductsLoading
            ? <span className="loader"></span>
            : <>
              <main>
                <DirectoryBlock
                  currentBrands={currentBrands}
                  products={products}
                />
                <Products
                  products={sortedProducts}
                  pageLimit={+sorting.pageLimit}
                />
                <FiltersBlock/>
              </main>
              {
                selectedProduct && <ProductPopup
                  product={selectedProduct}
                  cartProduct={cartProducts}
                  onClick={() => {
                    setSelectedProduct(null);
                  }}
                />
              }
            </>
        }
      </Context.Provider>
    </>
  );
}
export default HomePage;
