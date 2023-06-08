/* eslint-disable no-unused-expressions */
import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import classes from './range.module.scss';
import { Context } from '../../../pages/Home';

function Range() {
  const [searchParams, setSearchParams] = useSearchParams();
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
              const sortPriceMax = sorting?.maxPrice as number;
              let rangeValue = e.currentTarget.value;

              if (+rangeValue >= sortPriceMax) {
                rangeValue = `${sortPriceMax}`;
              }
              setSorting({
                ...sorting!,
                minPrice: +rangeValue,
              });

              searchParams.has('minPrice')
                ? searchParams.set('minPrice', rangeValue)
                : searchParams.append('minPrice', rangeValue);

              if (searchParams.get('minPrice') === `${minPriceInCatalog}`) {
                searchParams.delete('minPrice');
              }

              setSearchParams(searchParams);
            }}
            style={{
              height: 0,
              zIndex: 1,
            }}
            value={sorting?.minPrice}
            min={minPriceInCatalog}
            max={maxPriceInCatalog}
          />
          <input
            id="toSlider"
            type="range"
            onChange={(e) => {
              const sortPriceMin = sorting?.minPrice as number;
              let rangeValue = e.currentTarget.value;

              if (+rangeValue <= sortPriceMin) {
                rangeValue = `${sortPriceMin}`;
              }
              setSorting({
                ...sorting!,
                maxPrice: +rangeValue,
              });
              searchParams.has('maxPrice')
                ? searchParams.set('maxPrice', rangeValue)
                : searchParams.append('maxPrice', rangeValue);

              if (searchParams.get('maxPrice') === `${maxPriceInCatalog}`) {
                searchParams.delete('maxPrice');
              }

              setSearchParams(searchParams);
            }}
            value={sorting?.maxPrice}
            min={minPriceInCatalog}
            max={maxPriceInCatalog}
          />
        </div>
        <div className={classes.form_control}>
          <div>
            <p>Min: {sorting?.minPrice}$</p>
          </div>
          <div>
            <p>Max: {sorting?.maxPrice}$</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Range;
