import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import classes from './product_popup.module.scss';
import Rating from '../Rating/Rating';
import { Product } from '../../../scripts/types';
import { formatText } from '../../../scripts/helpers/helpers';
import CloseButton from '../buttons/CloseButton/CloseButton';

interface IProductPopup {
  product: Product,
  cartProduct: [Product[], React.Dispatch<React.SetStateAction<Product[]>>],
  onClick: (e?: React.MouseEvent<HTMLDivElement>) => void;
}

function ProductPopup({ product, cartProduct, onClick }: IProductPopup) {
  const [cartProducts, setCartProducts] = cartProduct;
  const productImg = [...product.images];
  const [selectImg, setSelectImg] = useState(product.thumbnail);
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div
      className={classes.popup_wrapper}
      onClick={onClick}
    >
      <div
        className={classes.popup_product}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes.close_button}>
          <CloseButton onClick={() => {
            searchParams.delete('id');
            setSearchParams(searchParams);
            onClick();
          }}/>
        </div>
        <div className={classes.images}>
          <div
            className={classes.current_img}
            style={{ backgroundImage: `url(${selectImg})` }}>
          </div>
          <div className={classes.img_block}>
            {productImg.map((img) => {
              return <img
                onClick={(e) => setSelectImg(e.currentTarget.src)}
                src={img}
                key={img}
              />;
            })}
          </div>
        </div>
        <div className={classes.about_product}>
          <h3>{formatText(product.title)}</h3>
          <p>Category: {formatText(product.category)}</p>
          <p>Brand: {formatText(product.brand)}</p>
          <div>
            <p>Description:</p>
            <p>{product.description}</p>
          </div>
          <div className={classes.price_block}>
            <div className={classes.price}>
              <span>{product.price}$</span>
              <span style={{ marginLeft: '15px' }}><Rating rating={product.rating}/></span>
            </div>
            <button className={classes.add_to_cart}
              onClick={() => {
                const productIndex = cartProducts.findIndex((p) => p.id === product.id);

                if (productIndex !== -1) {
                  setCartProducts(
                    cartProducts.filter((p) => p.id !== product.id),
                  );
                } else {
                  setCartProducts([product, ...cartProducts]);
                }
              }}
            >
              {cartProducts.includes(product) ? 'Drop from cart' : 'Add to cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPopup;
