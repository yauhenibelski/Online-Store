import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import classes from './logo.module.scss';
import { Context } from '../../../pages/Home';

function Logo() {
  const {
    sorting, setSorting, maxPriceInCatalog, minPriceInCatalog,
  } = useContext(Context);
  return (
    <NavLink
      to="/"
      className={classes.logo}
      onClick={() => {
        if (sorting && setSorting && maxPriceInCatalog && minPriceInCatalog) {
          setSorting({
            categories: [],
            brand: [],
            pageLimit: '15',
            sortBy: '',
            minPrice: minPriceInCatalog,
            maxPrice: maxPriceInCatalog,
          });
        }
      }}
    />
  );
}

export default Logo;
