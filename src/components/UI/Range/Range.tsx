import classes from './range.module.scss';
import { IFiltersBlock } from '../../FiltersBlock';
import { maxPrice, minPrice } from '../../../scripts/global_const';

function Range({ sorting, setSorting }: IFiltersBlock) {
  const min = sorting.minPrice;
  const max = sorting.maxPrice;

  return (
    <div className={classes.wrapper}>
      <h4 style={{ textAlign: 'center' }}>Price</h4>
      <div className={classes.container}>
        <div className={classes.sliders_control}>
          <input
            type="range"
            onChange={(e) => {
              if (+e.currentTarget.value >= max) {
                e.currentTarget.value = `${max}`;
              }
              setSorting(
                Object.defineProperty({ ...sorting }, 'price', {
                  value: {
                    max,
                    min: e.currentTarget.value,
                  },
                }),
              );
            }}
            style={{
              height: 0,
              zIndex: 1,
            }}
            value={min}
            min={minPrice}
            max={maxPrice}
          />
          <input
            id="toSlider"
            type="range"
            onChange={(e) => {
              if (+e.currentTarget.value <= min) {
                e.currentTarget.value = `${min}`;
              }
              setSorting(
                Object.defineProperty({ ...sorting }, 'price', {
                  value: {
                    min,
                    max: e.currentTarget.value,
                  },
                }),
              );
            }}
            value={max}
            min={minPrice}
            max={maxPrice}
          />
        </div>
        <div className={classes.form_control}>
          <div>
            <p>Min: {min}$</p>
          </div>
          <div>
            <p>Max: {max}$</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Range;
