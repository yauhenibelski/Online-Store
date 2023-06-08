import { useSearchParams } from 'react-router-dom';
import { useContext } from 'react';
import Range from './UI/Range/Range';
import OvalButton from './UI/buttons/oval_button/OvalButton';
import CustomSelect from './UI/custom_select/CustomSelect';
import { Context } from '../pages/Home';

function FiltersBlock() {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    sorting, setSorting, maxPriceInCatalog, minPriceInCatalog,
  } = useContext(Context);
  return (
    <div className='filters_wrapper'>
      <h3>Filters</h3>
      <div className='filters'>
        <OvalButton
          onClick={() => {
            if (setSorting && sorting && maxPriceInCatalog && minPriceInCatalog) {
              setSorting({
                ...sorting,
                minPrice: minPriceInCatalog,
                maxPrice: maxPriceInCatalog,
                pageLimit: '15',
                sortBy: '',
              });
            }
            searchParams.delete('sortBy');
            searchParams.delete('minPrice');
            searchParams.delete('maxPrice');
            searchParams.delete('pageLimit');

            setSearchParams(searchParams);
          }}
        >
          Clear Filter
        </OvalButton>
        <CustomSelect
          name={'sortBy'}
        >
          <option value="">Without sorting</option>
          <option value="price_ASC">Sort By: Price ASC</option>
          <option value="price_DESC">Sort By: Price DESC</option>
          <option value="rating_ASC">Sort By: Rating ASC</option>
          <option value="rating_DESC">Sort By: Rating DESC</option>
          <option value="discountPercentage_ASC">Sort By: Discount ASC</option>
          <option value="discountPercentage_DESC">Sort By: Discount DESC</option>
        </CustomSelect>
        <CustomSelect
          name={'pageLimit'}
        >
          <option value="15">Show: 15</option>
          <option value="30">Show: 30</option>
          <option value="45">Show: 45</option>
        </CustomSelect>
        <Range/>
      </div>
    </div>
  );
}
export default FiltersBlock;
