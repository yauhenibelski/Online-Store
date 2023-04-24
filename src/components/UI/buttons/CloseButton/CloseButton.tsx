import classes from './close_button.module.scss';

interface ICloseButton {
  children?: React.ReactNode,
  onClick?(e?: React.MouseEvent<HTMLButtonElement>): void
}
function CloseButton({ children, onClick }: ICloseButton) {
  return (
    <button
      className={classes.close}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default CloseButton;
