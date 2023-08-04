import React from 'react';

function IconAndNum({color, icon, text, number}) {
    return (
        <div className="hexagon-parent">
            <div className="hexagon" style={{backgroundColor: color}}>
                <div className="hexagon-inner">
                    <i className={icon} style={{color: color}}></i>
                </div>
            </div>
            <div className='hexagon-desc'>
                <div className="hexagon-num">{number}</div>
                <div className="hexagon-text">{text}</div>
            </div>
        </div>
    );
}

export default IconAndNum;