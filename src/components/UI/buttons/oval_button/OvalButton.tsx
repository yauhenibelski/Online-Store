import classes from './oval_button.module.scss';

interface Button {
  children?: React.ReactNode,
}

function OvalButton({ children }: Button) {
  return (
    <button className={classes.oval}>{children}</button>
  );
}
export default OvalButton;
