import { getNameDirectory } from '../scripts/global-const';
import Directory from './UI/Directory/Directory';
import products from '../assets/data/products.json';

interface IDirectoryBlock {
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>
  setSelectedBrand: React.Dispatch<React.SetStateAction<string[]>>
}

function DirectoryBlock({ setSelectedCategories, setSelectedBrand }: IDirectoryBlock) {
  return (
    <div>
      <Directory
        directory={getNameDirectory(products, 'category')}
        directoryName='Category'
        setSelectedName={setSelectedCategories}
      />
      <Directory
        directory={getNameDirectory(products, 'brand')}
        directoryName='Brand'
        setSelectedName={setSelectedBrand}
      />
    </div>
  );
}

export default DirectoryBlock;
