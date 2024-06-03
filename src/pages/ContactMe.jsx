
import '../App.css';
import HeaderComponent from '../components/HeaderComponent';
import Tile from '../components/Tile';
import FooterComponent from '../components/FooterComponent';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import self from '../components/assets/tamanna_image.jpeg';

function ContactMe() {
  return (
    <div className="contact">
        <HeaderComponent/>
        <Tile
        circle={"circle"} 
        header={"Reach out to me!"}
        img={self}
        text1={"I am available on almost every social media platform."}
        text2={"You want to discuss a project or just want to say hi? My Inbox is always open for you."}
        />
        <FooterComponent/>
    </div>
  );
}

export default ContactMe;
