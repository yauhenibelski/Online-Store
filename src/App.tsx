import './styles/index.scss';
import { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/UI/Header/Sticky-Header';
import HomePage from './pages/Home';
import { CartProducts, Product } from './scripts/types';
import Cart from './pages/Cart';

function App() {
  const cartProducts: CartProducts = useState<Product[]>([]);

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route index element={<HomePage cartProducts={cartProducts}/>}/>
          <Route path="/cart" element={<Cart cartProducts={cartProducts}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
