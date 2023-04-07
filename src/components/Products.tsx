import { formatText } from '../scripts/helpers/helpers';
import Rating from './UI/Rating/Rating';
import { Products as ProductsType } from '../scripts/types';

function Products({ products }: ProductsType) {
  return (!products.length
    ? <div className='products'>
      <h1 style={{ marginTop: '40%' }}>No products found =(</h1>
    </div>
    : <div className='products'>
      {
        products.map((prod) => {
          const img: string = prod.thumbnail;
          return (
            <div className='product' key={prod.id}>
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
