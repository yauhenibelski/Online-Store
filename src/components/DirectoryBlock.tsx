import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
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
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const context = useContext(Context);
  return (
    <div>
      <Directory directoryName='Category'>
        {
          categories.map((category) => {
            return <div className='link__directory'
              key={category}>
              <NavLink
                to={`/${category}`}
                className={({ isActive }) => (isActive ? 'active-link link' : 'link') }
              >
                {category}
              </NavLink>
            </div>;
          })
        }
      </Directory>

      <Directory directoryName='Brand'>
        {
          currentBrands.map((brandName) => {
            const brand = formatText(brandName);
            return (
              <div
                key={brand}
                className='link__directory'
              >
                <input
                  type='checkbox'
                  name={brand}
                  id={brand}
                />
                <label htmlFor={brand}>
                  {brand}
                </label>
              </div>
            );
          })
        }
      </Directory>
    </div>
  );
}
