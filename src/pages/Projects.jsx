
import '../App.css';
import HeaderComponent from '../components/HeaderComponent';
import Tile from '../components/Tile';
import FooterComponent from '../components/FooterComponent';
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
