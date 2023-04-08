import classes from './oval_button.module.scss';

interface Button {
  children?: React.ReactNode,
  onClick(e: React.MouseEvent<HTMLButtonElement>): void
}

function OvalButton({ children, onClick }: Button) {
  return (
    <button
      className={classes.oval}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default OvalButton;
