import '/home/hp/react/myportfolio/src/App.css';
import section3 from '/home/hp/react/myportfolio/src/components/assets/Data_Analysis.svg';

function Section3() {
    return(
        <section id="whatido">
            <h1>What I Do ?</h1>
            <div className="section3">

                <div className="section3-left">
                    <img src={section3} alt="#"/>
                </div>

                <div className="section3-right">
                    <h1>Data Analytics & ML</h1>
                    <p>Developing Models that clean, tranform and analyse raw data to discover useful information, in order to make conclusions about the data.</p>
                    <p>Experience of working with different python Libraries like Numpy, Pandas, Matplotlib, Seaborn etc. and have knowledge of Data analysis algorithms and techniques.</p>
                </div>
            </div>

        </section>
    )
    
}

export default Section3;