import './progress.css'

function progress ({percentage}) {
    return (
        <div className="progress-bar-container">
            <div className="progress-bar" style={{width: `${percentage}%`}} >
            </div>
        </div>
    );
}

export default progress;