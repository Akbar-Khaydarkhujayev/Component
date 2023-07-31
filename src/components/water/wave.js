import React from 'react';

function Wave({percentage, text}) {
    return (
        <div className="water">
            <div className='water-text'><span  className="percentage">{percentage}</span><sup>%</sup><br/>{text}</div>
            <div className="water-img" style={{backgroundPositionY: 100-percentage+"px"}}/>
            <div className="water-img2" style={{backgroundPositionY: 100-percentage+"px"}}/>
        </div>
    );
}

export default Wave;