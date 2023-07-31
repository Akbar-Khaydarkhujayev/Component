import React from 'react';

function Bar(props) {
    return (
        <div className="flex bar-parent position-relative">
            <div className="date">{props.date}</div>
            <div className="separator0"></div>
            <div className="bar"></div>
            <div className="separator1"></div>
            <div className="separator" style={{left: "127px"}}></div>
            <div className="separator" style={{left: "202px"}}></div>
            <div className="separator" style={{left: "277px"}}></div>
            <div className="point" style={{left: `${props.level+46}px`}}></div>
        </div>
    );
}

export default Bar;