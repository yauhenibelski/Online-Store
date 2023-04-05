import { useState } from 'react';
import classes from './range.module.scss';

function Range() {
  const [fromSlider, setFromSlider] = useState(10);
  const [toSlider, setToSlider] = useState(60);
  return (
    <div className={classes.wrapper}>
      <h4 style={{ textAlign: 'center' }}>Price</h4>
      <div className={classes.container}>
        <div className={classes.sliders_control}>
          <input
            id="fromSlider"
            type="range"
            onChange={(e) => {
              return +e.target.value >= toSlider ? setFromSlider(toSlider)
                : setFromSlider(+e.target.value);
            }}
            style={{
              height: 0,
              zIndex: 1,
            }}
            value={fromSlider}
            min="0"
            max="100"
          />
          <input
            id="toSlider"
            type="range"
            onChange={(e) => {
              return +e.target.value <= fromSlider ? setToSlider(fromSlider)
                : setToSlider(+e.target.value);
            }}
            value={toSlider}
            min="0"
            max="100"/>
        </div>
        <div className={classes.form_control}>
          <div>
            <p>Min: {fromSlider}</p>
          </div>
          <div>
            <p>Max: {toSlider}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Range;
