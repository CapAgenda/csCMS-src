import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './Pages/About';
import ComicTags from './Pages/ComicTags';
import ComicCategories from './Pages/ComicCategories';
import Main from './Pages';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/comiccategories" element={<ComicCategories />} />
        <Route path="/comictags" element={<ComicTags />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </Router>
    
    
    
  );
}

export default App;
