import React from 'react';

function Button(props) {
    return (
        <div className="button-wrapper">
            <div className="button-title">Menu</div>
            <div className="button-icon"><i className="fa-solid fa-house button-icon1"></i></div>
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
            <div className="line line4"></div>
            <div className="line line5"></div>
            <div className="line line6"></div>
            <div className="button-corner1"></div>
            <div className="button-corner2"></div>
            <div className="button-corner"></div>
        </div>
    );
}

export default Button;