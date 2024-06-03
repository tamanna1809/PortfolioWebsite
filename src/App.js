import './App.css';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Education from './pages/Education';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import SkillsPage from './pages/SkillsPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
            <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contactme" element={<ContactMe />} />
            <Route path="/skillspage" element={<SkillsPage />} />
            </Routes>

        </Router>
        </header>
    </div>
  );
}

export default App;
