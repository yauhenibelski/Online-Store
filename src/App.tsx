import './styles/index.scss';
import { useState } from 'react';
import Header from './components/UI/Header/Sticky-Header';
import HomePage from './pages/Home';
import { CartProducts } from './scripts/types';
import Cart from './pages/Cart';

function App() {
  const cartProducts: CartProducts = useState();

  return (
    <>
      <Header/>
      <HomePage cartProducts={cartProducts}/>
      <Cart cartProducts={cartProducts}/>
    </>
  );
}

export default App;
