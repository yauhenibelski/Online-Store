import classes from './custom_select.module.scss';

interface S {
  children?: React.ReactNode;
}

function CustomSelect({ children }: S) {
  return (
    <select className={classes.s}>{children}</select>
  );
}
export default CustomSelect;
