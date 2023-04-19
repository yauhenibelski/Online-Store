import classes from './product_card.module.scss';
import { formatText } from '../../../scripts/helpers/helpers';
import { CartProducts, Product } from '../../../scripts/types';
import Rating from '../Rating/Rating';

interface IProductCard {
  product: Product,
  click(p:Product): void
  cartProducts: CartProducts,
}

function ProductCard({ product, click }: IProductCard) {
  return (
    <>
      <div className={classes.p}
        onClick={() => click(product)}
      >
        <div
          style={ { backgroundImage: `url(${product.thumbnail})` }}
          className={classes.thumbnail}
        >
        </div>
        <p className={classes.title}>{
          product.title.length < 40
            ? formatText(product.title)
            : `${formatText(product.title).slice(0, 38)}...`
        }</p>
        <div className={classes.price}>
          <Rating rating={product.rating}/>
          <p className={classes.price}>{product.price}$</p>

        </div>
      </div>
    </>

  );
}

export default ProductCard;
