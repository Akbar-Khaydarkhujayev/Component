import React from 'react';

function ShareButton({text, icon}) {
    return (
        <div className="share-button">
            <div className="share-button-icon"><i className={icon}></i></div>
            <div className="share-button-text"><p className="share-on">Share on</p><p className="share-on-text">{text}</p></div>
            <div className="share-button-corner1"></div>
            <div className="share-button-corner2"></div>
            <div className="share-button-corner"></div>
        </div>
    );
}

export default ShareButton;