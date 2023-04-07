import { formatText, getNameDirectory } from '../scripts/helpers/helpers';
import Directory from './UI/Directory/Directory';
import products from '../assets/data/products.json';

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
  currentBrands, directoryFilter, setDirectoryFilter,
}: IDirectoryBlock) {
  return (
    <div>
      <Directory
        directory={getNameDirectory(products, 'category')}
        directoryName='Category'
        directoryFilter={directoryFilter}
        setDirectoryFilter={setDirectoryFilter}
        currentBrands={currentBrands}
      />
      <Directory
        directory={currentBrands.map((brand) => formatText(brand))}
        directoryName='Brand'
        directoryFilter={directoryFilter}
        setDirectoryFilter={setDirectoryFilter}
        currentBrands={currentBrands}
      />
    </div>
  );
}
