import classes from './custom_select.module.scss';
import { IFiltersBlock } from '../../FiltersBlock';

interface ICustomSelect extends IFiltersBlock {
  children: React.ReactNode;
  name: string;
}

function CustomSelect({
  children, name, sorting, setSorting,
}: ICustomSelect) {
  return (
    <select
      className={classes.s}
      value={
        Object.getOwnPropertyDescriptor(sorting, name)?.value
      }
      name={name}
      onChange={(e) => {
        return setSorting(
          Object.defineProperty({ ...sorting }, name, { value: e.currentTarget.value }),
        );
      }}
    >
      {children}
    </select>
  );
}
export default CustomSelect;
