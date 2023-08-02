import React, {useEffect, useRef, useState} from 'react';

function RoundChart(props) {

    return (
        <div className="round-parent">
            <span className="value">{props.data} %</span>
            <div className="round" style={{background: `conic-gradient(#22D8E3 ${props.data-2}deg, transparent ${props.data+2}deg)`}}></div>
            <div className="round-underlay"></div>
            <img src="https://cdn-icons-png.flaticon.com/512/6015/6015853.png" alt="#" className="round-img"/>
        </div>
    );
}

export default RoundChart;