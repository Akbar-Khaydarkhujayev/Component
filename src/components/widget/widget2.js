import React from 'react';

function Widget2({text, number}) {
    return (
        <div className="widget2-parent">
            <div className="arrow arrow-top"></div>
            <div className="arrow arrow-left"></div>
            <div className="arrow arrow-bottom"></div>
            <div className="arrow arrow-right"></div>
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