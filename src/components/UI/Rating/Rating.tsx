import classes from './rating.module.scss';

interface IRating {
  rating: number,
}

function Rating({ rating }: IRating) {
  const ratingWidth = 100 - ((rating * 100) / 5);

  return (
    <div className={classes.rating}>
      <div className={classes.stars}></div>
      <div style={{ width: `${ratingWidth}%` }} className={classes.white_background}></div>
      <div className={classes.stars_border}></div>
    </div>
  );
}
export default Rating;
