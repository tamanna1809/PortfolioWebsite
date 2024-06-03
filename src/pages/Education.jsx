
import '../App.css';
import HeaderComponent from '../components/HeaderComponent';
import Tile from '../components/Tile';
import FooterComponent from '../components/FooterComponent';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Education() {
  return (
    <div className="education">
        <HeaderComponent/>
        <Tile 
        header={"Competitive Programming"}
        img={"https://ajitverma15.github.io/Interactive-Portfolio/Image/Programming.svg"}
        />
        <FooterComponent/>
    </div>
  );
}

export default Education;
