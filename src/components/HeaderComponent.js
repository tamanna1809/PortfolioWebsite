import '../App.css';
import {Link} from 'react-router-dom';
import React from 'react';

function HeaderComponent() {
    return(
        <nav className="header">
            <div className="name">
                <h1>Tamanna Mohan</h1>
            </div>

            <div className="nav">
            <ul>
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/education">Education</Link></li>
                <li className="nav-item"><Link to="/skillspage">Skills</Link></li>
                <li className="nav-item"><Link to="/projects">Projects</Link></li>
                <li className="nav-item"><Link to="/contactme">Contact Me</Link></li>
            </ul>
            </div>
        </nav>
    )
    
}

export default HeaderComponent;