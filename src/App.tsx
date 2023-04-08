import './styles/index.scss';
import Header from './components/UI/Header/Sticky-Header';
import SearchBlok from './components/SearchBlok';
import HomePage from './pages/Home';

function App() {
  return (
    <>
      <Header/>
      <SearchBlok/>
      <HomePage/>
    </>
  );
}

export default App;
