import './styles/index.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/UI/Header/Sticky-Header';
import HomePage from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
