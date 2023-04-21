import { CartProducts } from '../scripts/types';
import Logo from './UI/Logo/Logo';
import Search from './UI/Search/Search';
import CartButton from './UI/buttons/CartButton/CartButton';

interface ISearchBlock {
  cartProducts: CartProducts,
}

function SearchBlock({ cartProducts }: ISearchBlock) {
  return (
    <section className='search-block'>
      <Logo/>
      <Search
        cartProducts={cartProducts}
      />
      <CartButton
        cartProducts={cartProducts}
      />
    </section>
  );
}
export default SearchBlock;
