import { formatText } from '../scripts/helpers/helpers';
import Rating from './UI/Rating/Rating';
import directory from '../assets/data/products.json';

function Products() {
  const { products } = directory;

  return (
    <div className='products'>
      {
        products.map((prod) => {
          const img: string = prod.thumbnail;
          return (
            <div className='product'>
              <div
                style={ { backgroundImage: `url(${img})` }}
                className='thumbnail'
              >
              </div>
              <p className='title'>{formatText(prod.title)}</p>
              <div className='price'>
                <Rating rating={prod.rating}/>
                <p className='price'>{prod.price}$</p>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}
export default Products;
