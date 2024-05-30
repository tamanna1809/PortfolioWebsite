import '/home/hp/react/myportfolio/src/App.css';

function HeaderComponent() {
    return(
        <nav className="header">
            <div className="name">
                <h1>Tamanna Mohan</h1>
            </div>

            <div className="nav">
            <ul>
                <li className="nav-item"><a href="#">Home</a></li>
                <li className="nav-item"><a href="#">Education</a></li>
                <li className="nav-item"><a href="#">Skills</a></li>
                <li className="nav-item"><a href="#">Projects</a></li>
                <li className="nav-item"><a href="#">Contact Me</a></li>
            </ul>
            </div>
        </nav>
    )
    
}

export default HeaderComponent;