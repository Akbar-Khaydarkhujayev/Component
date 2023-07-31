import React from 'react';

function Circle2({percentage}) {

    const squareArr = Array.from(Array(100).keys());

    return (
        <div className='container2 flex flex-wrap space-around'>
            <div className="progress-bar-container">
                <div className="progress-bar-data">
                    <i className="fa-solid fa-envelope progress-bar-icon"></i>
                    <p className="progress-bar-number">{percentage} / 100</p>
                    <p className="progress-bar-text">Emails Sent</p>
                </div>
                <div className="progress-bar">
                    <div className="progress-bar-square">
                        {squareArr.map((i) => <div key={i} className={i>99-percentage ? "square square-glow" : 'square'}></div>)}
                    </div>
                    <div className="progress-bar-desc">{percentage}% Is Done</div>
                </div>
            </div>
        </div>
    );
}

export default Circle2;