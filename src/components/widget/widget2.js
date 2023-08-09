import React from 'react';

function Widget2({text, number}) {
    return (
        <div className="widget2-parent">
            <div className="arrow-rotate">
                <div className="arrow-parent arrow-top">
                    <div className="arrow"></div>
                </div>
                <div className="arrow-parent arrow-left">
                    <div className="arrow"></div>
                </div>
                <div className="arrow-parent arrow-bottom">
                    <div className="arrow"></div>
                </div>
                <div className="arrow-parent arrow-right">
                    <div className="arrow"></div>
                </div>
            </div>
            <div className="widget2-data">
                <p style={{fontSize: "18px"}}>
                    {text}
                </p>
                <p>
                    {number}
                </p>
            </div>
        </div>
    );
}

export default Widget2;