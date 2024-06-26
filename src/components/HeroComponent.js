import '../App.css';
import section2 from '../components/assets/20200630_162659.gif';

function HeroComponent() {
    return(
    <div className="hero">

        <div className="hero-left">
            <div className="greet">
                <h1>Hello All! I'm Tamanna <span role="img" aria-label="wave">👋</span></h1>
                <p>A passionate Developer having an experience in Data Analytics, Machine Learning and Web Development and want to develop sustainable and scalable social and technical systems to create impact</p>
        
            </div>
        </div>


        <div className="hero-right">
            <img src={section2} alt="#"/>
        </div>

    </div>
)}

export default HeroComponent;