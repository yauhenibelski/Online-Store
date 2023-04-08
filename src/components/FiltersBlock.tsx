import Range from './UI/Range/Range';
import OvalButton from './UI/buttons/oval_button/OvalButton';
import CustomSelect from './UI/custom_select/CustomSelect';

export interface IFiltersBlock {
  sorting: {
    sortBy: string;
    show: string;
    price: {
      min: number;
      max: number;
    };
  }
  setSorting: React.Dispatch<React.SetStateAction<{
    sortBy: string;
    show: string;
    price: {
      min: number;
      max: number;
    };
  }>>
}

function FiltersBlock({ sorting, setSorting }: IFiltersBlock) {
  return (
    <div className='filters_wrapper'>
      <h3>Filters</h3>
      <div className='filters'>
        <OvalButton>Clear Filter</OvalButton>
        <CustomSelect
          name={'sortBy'}
          sorting={sorting}
          setSorting={setSorting}
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
          name={'show'}
          sorting={sorting}
          setSorting={setSorting}
        >
          <option value="15">Show: 15</option>
          <option value="30">Show: 30</option>
          <option value="45">Show: 45</option>
        </CustomSelect>
        <Range
          sorting={sorting}
          setSorting={setSorting}
        />
      </div>
    </div>
  );
}
export default FiltersBlock;
