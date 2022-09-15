import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from './Pages';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </Router>
    
    
    
  );
}

export default App;
