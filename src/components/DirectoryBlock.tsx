/* eslint-disable no-unused-expressions */
import { useSearchParams } from 'react-router-dom';
import { useContext } from 'react';
import { Clipboard } from 'ts-clipboard';
import { formatText, getNameDirectory } from '../scripts/helpers/helpers';
import { Product } from '../scripts/types';
import Directory from './UI/Directory/Directory';
import { Context } from '../pages/Home';

export interface IDirectoryBlock {
  currentBrands: string[],
  products: Product[],
}

export function DirectoryBlock({ currentBrands, products }: IDirectoryBlock) {
  const categories = getNameDirectory(products, 'category');
  const { sorting, setSorting } = useContext(Context);
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className='directory-wrapper'>
      <button
        className='copy-link'
        onClick={() => { Clipboard.copy(document.location.href); }}
      >Copy link</button>
      <Directory directoryName='Category'>
        {
          categories.map((category) => {
            return <div className='link__directory'
              key={category}>
              <div
                className={sorting?.categories.includes(category) ? 'active-link link' : 'link'}
                onClick={() => {
                  setSorting!({
                    ...sorting!,
                    categories: [category],
                    brand: [],
                  });
                  searchParams.has('category')
                    ? searchParams.set('category', category)
                    : searchParams.append('category', category);

                  searchParams.delete('brand');
                  setSearchParams(searchParams);
                }}
              >
                {category}
              </div>
            </div>;
          })
        }
      </Directory>

      <Directory directoryName='Brand'>
        {
          currentBrands.map((brand) => {
            const brandName = formatText(brand);
            return (
              <div
                key={brandName}
                className='link__directory'
              >
                <input
                  type='checkbox'
                  checked={sorting?.brand.includes(brand)}
                  onChange={(e) => {
                    if (e.currentTarget.checked) {
                      setSorting!({
                        ...sorting!,
                        brand: [...sorting!.brand, brand],
                      });
                      searchParams.has('brand') && sorting?.brand.length
                        ? searchParams.set('brand', [...sorting!.brand, brand].join(','))
                        : searchParams.append('brand', brand);

                      setSearchParams(searchParams);
                    } else {
                      setSorting!({
                        ...sorting!,
                        brand: [...sorting!.brand.filter((b) => b !== brandName)],
                      });

                      sorting!.brand.length < 2
                        ? searchParams.delete('brand')
                        : searchParams.set('brand', [sorting!.brand.filter((b) => b !== brand)].join(','));
                      setSearchParams(searchParams);
                    }
                  }}
                  value={brand}
                  name={brand}
                  id={brand}
                />
                <label htmlFor={brand}>
                  {brandName}
                </label>
              </div>
            );
          })
        }
      </Directory>
    </div>
  );
}
