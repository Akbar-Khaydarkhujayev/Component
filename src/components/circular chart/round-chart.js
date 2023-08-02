import React, {useEffect, useRef, useState} from 'react';

function RoundChart(props) {

    return (
        <div className="round-parent">
            <span className="value">{props.data} %</span>
            <div className="round" style={{background: `conic-gradient(#22D8E3 ${props.data-2}deg, transparent ${props.data+2}deg)`}}></div>
            <div className="round-underlay"></div>
            <img src={props.image} alt="#" className="round-img"/>
        </div>
    );
}

export default RoundChart;