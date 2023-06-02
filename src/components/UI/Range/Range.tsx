import { useContext } from 'react';
import classes from './range.module.scss';
import { Context } from '../../../pages/Home';

function Range() {
  const context = useContext(Context);
  const {
    maxPriceInCatalog,
    minPriceInCatalog,
    sorting,
  } = context;
  const setSorting = context.setSorting!;

  return (
    <div className={classes.wrapper}>
      <h4 style={{ textAlign: 'center' }}>Price</h4>
      <div className={classes.container}>
        <div className={classes.sliders_control}>
          <input
            type="range"
            onChange={(e) => {
              const sortPriceMax = sorting?.sortPriceMax as number;
              const sort = sorting!;
              if (+e.currentTarget.value >= sortPriceMax) {
                e.currentTarget.value = `${sortPriceMax}`;
              }
              setSorting({
                ...sort,
                sortPriceMin: +e.currentTarget.value,
              });
            }}
            style={{
              height: 0,
              zIndex: 1,
            }}
            value={sorting?.sortPriceMin}
            min={minPriceInCatalog}
            max={maxPriceInCatalog}
          />
          <input
            id="toSlider"
            type="range"
            onChange={(e) => {
              const sortPriceMin = sorting?.sortPriceMin as number;
              const sort = sorting!;
              if (+e.currentTarget.value <= sortPriceMin) {
                e.currentTarget.value = `${sortPriceMin}`;
              }
              setSorting({
                ...sort,
                sortPriceMax: +e.currentTarget.value,
              });
            }}
            value={sorting?.sortPriceMax}
            min={minPriceInCatalog}
            max={maxPriceInCatalog}
          />
        </div>
        <div className={classes.form_control}>
          <div>
            <p>Min: {sorting?.sortPriceMin}$</p>
          </div>
          <div>
            <p>Max: {sorting?.sortPriceMax}$</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Range;
