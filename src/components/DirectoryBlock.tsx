import { formatText, getNameDirectory } from '../scripts/helpers/helpers';
import Directory from './UI/Directory/Directory';
import catalog from '../assets/data/products.json';

export interface IDirectoryBlock {
  directoryFilter: {
    categories: string[],
    brand: string[],
  };
  setDirectoryFilter: React.Dispatch<React.SetStateAction<{
    categories: string[];
    brand: string[];
  }>>,
  currentBrands: string[],
}

export function DirectoryBlock({
  currentBrands,
  directoryFilter,
  setDirectoryFilter,
}: IDirectoryBlock) {
  const { products } = catalog;

  return (
    <div>
      <Directory
        directory={getNameDirectory(products, 'category')}
        directoryName='Category'
        directoryFilter={directoryFilter}
        setDirectoryFilter={setDirectoryFilter}
        currentBrands={currentBrands}
        directoryType='radio'
      />
      <Directory
        directory={currentBrands.map((brand) => formatText(brand))}
        directoryName='Brand'
        directoryFilter={directoryFilter}
        setDirectoryFilter={setDirectoryFilter}
        currentBrands={currentBrands}
        directoryType='checkbox'
      />
    </div>
  );
}
