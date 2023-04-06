import { getNameDirectory } from '../scripts/helpers/helpers';
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
  }>>
}

export function DirectoryBlock({ directoryFilter, setDirectoryFilter }: IDirectoryBlock) {
  return (
    <div>
      <Directory
        directory={getNameDirectory(products, 'category')}
        directoryName='Category'
        directoryFilter={directoryFilter}
        setDirectoryFilter={setDirectoryFilter}
      />
      <Directory
        directory={getNameDirectory(products, 'brand')}
        directoryName='Brand'
        directoryFilter={directoryFilter}
        setDirectoryFilter={setDirectoryFilter}
      />
    </div>
  );
}
