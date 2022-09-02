import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import ComicTags from './Pages/ComicTags';
import ComicCategories from './Pages/ComicCategories';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/comiccategories" element={<ComicCategories />} />
        <Route path="/comictags" element={<ComicTags />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
    
    
    
  );
}

export default App;
