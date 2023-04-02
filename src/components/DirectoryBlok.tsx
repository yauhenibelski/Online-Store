import { getNameDirectory } from '../scripts/global-const';
import Directory from './UI/Directory/Directory';
import products from '../assets/data/products.json';

function DirectoryBlok() {
  return (
    <div>
      <Directory
        directory={getNameDirectory(products, 'category')}
        directoryName='Category'/>
      <Directory
        directory={getNameDirectory(products, 'brand')}
        directoryName='Brand'/>
    </div>
  );
}

export default DirectoryBlok;
