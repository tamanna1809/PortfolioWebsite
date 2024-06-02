
import '/home/hp/react/myportfolio/src/App.css';
import HeaderComponent from '/home/hp/react/myportfolio/src/components/HeaderComponent.js';
import Tile from '/home/hp/react/myportfolio/src/components/Tile.jsx';
import FooterComponent from '/home/hp/react/myportfolio/src/components/FooterComponent.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Projects() {
  return (
    <div className="projects">
        <HeaderComponent/>
        <Tile 
        header={"Projects"}
        img={"https://ajitverma15.github.io/Interactive-Portfolio/Image/Project.svg"}
        text1={"My Project uses various technologies to make the model more accurate and stable. As of now, I haven't done many projects but in near future I will make more projects."}
        />
        <FooterComponent/>
    </div>
  );
}

export default Projects;
