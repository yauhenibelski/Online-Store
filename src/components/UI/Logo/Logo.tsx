import { NavLink } from 'react-router-dom';
import classes from './logo.module.scss';

function Logo() {
  return (
    <NavLink to="/" className={classes.logo}/>
  );
}

export default Logo;
