import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import HeaderImage from './components/HeaderImage';
import ComicSection from './components/ComicSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="container-grid">
      <Header />
      <Nav />
      <HeaderImage />
      <ComicSection />
      <FooterSection />
    </div>
  );
}

export default App;
