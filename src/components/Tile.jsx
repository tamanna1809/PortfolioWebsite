import '../App.css';
function Tile({ header, img, text1,text2,text3,position, circle}) {
    return(
        <div className={`tile ${position}`}>
            <div className="img-parent">
                <img src={img} alt="tile-img" className={`image ${circle}`}/>
            </div>

            <div className="text-parent">
                {header ? (<h1>{header}</h1>) : ""}
                <div className="text">
                    <p>{text1}</p>
                    <p>{text2}</p>
                    <p>{text3}</p>
                </div>

            </div>
             
        </div> 
    )
    
}

export default Tile;

