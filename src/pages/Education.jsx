
import '/home/hp/react/myportfolio/src/App.css';
import HeaderComponent from '/home/hp/react/myportfolio/src/components/HeaderComponent.js';
import Tile from '/home/hp/react/myportfolio/src/components/Tile.jsx';
import FooterComponent from '/home/hp/react/myportfolio/src/components/FooterComponent.js';
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
