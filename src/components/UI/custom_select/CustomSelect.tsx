/* eslint-disable no-unused-expressions */
import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import classes from './custom_select.module.scss';
import { Context } from '../../../pages/Home';

interface ICustomSelect {
  children: React.ReactNode;
  name: string;
}

function CustomSelect({ children, name }: ICustomSelect) {
  const { sorting, setSorting } = useContext(Context);
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <select
      className={classes.s}
      value={
        Object.getOwnPropertyDescriptor(sorting, name)?.value
      }
      name={name}
      onChange={(e) => {
        const { value } = e.currentTarget;
        if (sorting && setSorting) {
          setSorting(
            Object.defineProperty({ ...sorting }, name, { value }),
          );
        }
        searchParams.has(name)
          ? searchParams.set(name, value)
          : searchParams.append(name, value);

        if (searchParams.get(name) === '') {
          searchParams.delete(name);
        }

        setSearchParams(searchParams);
      }}
    >
      {children}
    </select>
  );
}
export default CustomSelect;
