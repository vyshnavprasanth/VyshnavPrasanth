import './App.css';
import AboutMe from './Pages/AboutMe';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
