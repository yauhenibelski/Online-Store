import Logo from './UI/Logo/Logo';
import Search from './UI/Search/Search';
import CartButton from './UI/buttons/CartButton/CartButton';

function SearchBlock() {
  return (
    <section className='search-block'>
      <Logo/>
      <Search/>
      <CartButton/>
    </section>
  );
}
export default SearchBlock;
