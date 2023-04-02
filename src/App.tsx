import './styles/index.scss';
import React from 'react';
import Header from './components/UI/Header/Sticky-Header';
import SearchBlok from './components/SearchBlok';
import DirectoryBlok from './components/DirectoryBlok';
import Products from './components/Products';

function App() {
  return (
    <React.StrictMode>
      <Header/>
      <SearchBlok/>
      <section>
        <DirectoryBlok/>
        <Products/>
      </section>
    </React.StrictMode>
  );
}

export default App;
