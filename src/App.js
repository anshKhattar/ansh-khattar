import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/HomePage/Home';
import Experience from './pages/Experience/Experience';
import Work from './pages/Work/Work';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import Education from './pages/Education/Education';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/work" element={<Work/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/education" element={<Education/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
