import Range from './UI/Range/Range';
import OvalButton from './UI/buttons/oval_button/OvalButton';
import CustomSelect from './UI/custom_select/CustomSelect';

function FiltersBlock() {
  return (
    <div className='filters_wrapper'>
      <h3>Filters</h3>
      <div className='filters'>
        <OvalButton>Clear Filter</OvalButton>
        <CustomSelect>
          <option value="">Sort By:</option>
        </CustomSelect>
        <CustomSelect>
          <option value="">Show:</option>
        </CustomSelect>
        <Range/>
      </div>
    </div>
  );
}
export default FiltersBlock;
