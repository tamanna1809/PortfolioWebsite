import progress from "/home/hp/react/myportfolio/src/components/progress.js";
import { useEffect, useState } from "react";
import '/home/hp/react/myportfolio/src/pages/skillspage.css'
import FooterComponent from "/home/hp/react/myportfolio/src/components/FooterComponent.js";
import HeaderComponent from "/home/hp/react/myportfolio/src/components/HeaderComponent.js";

function SkillsPage () {

    const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => (prev < 100 ? prev + 10 : 100));
    }, 1000)

    return () => clearInterval(interval);
  })

    return (
        <>
        <HeaderComponent/>
        <div className="skills">
            <div className="imgParent">
                <img src="https://ajitverma15.github.io/Interactive-Portfolio/Image/Skills.svg" alt="skillsImg"/>
            </div>
            <div className="progressBarParent">
                <h2>Proficiency</h2>
                <progress
                    percentage= {85}/>
                <progress
                    percentage={80}/>
                <progress
                    percentage={80}/>
                <progress
                    percentage={90}/>
                <progress
                    percentage={70}/>
                <progress
                    percentage={65}/>
                <progress
                    percentage={80}/>
            </div>
        </div>
        <FooterComponent/>
        </>
    );
}
export default SkillsPage;