import React from 'react';

function Widget({icon, number, text}) {
    return (
        <div className="widget-parent">
            <div className="rhombus-parent">
                <div className="rhombus" style={{height: Math.sqrt(1250), width: Math.sqrt(1250)}}>
                </div>
                <i className={icon}></i>
            </div>
            <div className='widget-desc'>
                <div className="widget-text">{text}</div>
                <div className="widget-num">{number}</div>
            </div>
        </div>
    );
}

export default Widget;