import logo from './logo.svg';
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
        {/* <HeaderComponent/>
        <HeroComponent/> */}
        {/* <Section3/>
        <Tile 
        header={"Web Development"}
        text1={"Building Fully responsive website frontend using HTML, CSS, Bootstrap and Javascript."}
        text2={"As of now I have knowledge only of frontend but in near future I will learn more skills and excited to explore React, NodeJS, Django, Flask and many more."}
        text3={" I have also used Abode Photoshop, Illustrator and Figma to design User interface of websites and mobile applications and designed logos."}
        img={"https://ajitverma15.github.io/Interactive-Portfolio/Image/website.svg"}
        position={"right"}
        />

        <Tile 
        header={"Data Structures and Algorithms "}
        text1={" I have knowledge of Data Structures like Hash Tables, Trees, Tries, Graphs, and various algorithms for solving various problems efficiently."}
        text2={"As I know Data Structures and Algorithms are the heart of programming, so I love to solve programming questions in different competitive websites like Codeforces, Codechef, Hackerrank and many more."}
        img={"https://ajitverma15.github.io/Interactive-Portfolio/Image/Coding.svg"}
        /> */}
        <Router>
            <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contactme" element={<ContactMe />} />
            <Route path="/skillspage" element={<SkillsPage />} />
            </Routes>

        </Router>
        {/* <FooterComponent/> */}



        </header>
    </div>
  );
}

export default App;
