import React from 'react';

function Widget1({number, icon}) {

    const arrayOfDigits = Array.from(String(number), Number);

    return (
        <div className="widget1">
            <div className="widget1-border-anim">
                <div className="widget1-icon"><i className={icon}></i></div>
            </div>

            {arrayOfDigits.map((item) => <div className="widget1-child">{item}</div>)}
        </div>
    );
}

export default Widget1;