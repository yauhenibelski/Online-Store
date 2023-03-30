import './styles/index.scss';
import Header from './components/UI/Header/Sticky-Header';
import Search from './components/UI/Search/Search';
import Logo from './components/UI/Logo/Logo';
import Directory from './components/UI/Directory/Directory';
import { categories } from './scripts/global-const';
// import prod from './assets/data/products.json';

function App() {
  return (
    <>
      <Header/>
      <section>
        <Logo/>
        <Search/>
        <Directory
          directory={categories}
          directoryName='Category'/>
      </section>
    </>
  );
}

export default App;
