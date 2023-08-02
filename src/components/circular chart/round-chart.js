import React, {useEffect, useRef, useState} from 'react';

function RoundChart(props) {

    return (
        <div className="round-parent">
            <span className="value">{props.data} %</span>
            <div className="round" style={{background: `conic-gradient(#00d7ff ${props.data-2}deg, transparent ${props.data+2}deg)`}}></div>
            <div className="round-underlay"></div>
            <svg className="round-img" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 48 48">
                <path fill="#3dd9eb" d="M24,26.778l-11.054-7.145L13,35.804l11.104,7.451l11.69-7.727v-16.15L24,26.778z"></path><polygon fill="#3dd9eb" points="5,25.721 16.54,32.592 24,26.778 12.946,19.632"></polygon><polygon fill="#3dd9eb" points="43.3,13.207 31.91,6 24,12.497 35.823,19.378"></polygon><polygon fill="#3dd9eb" points="35.823,19.378 24,26.778 31.73,32.592 43.3,25.721"></polygon><polygon fill="#3dd9eb" points="16.422,6 4.7,13.629 13,19.632 24,12.56"></polygon><polygon fill="#00b3d7" points="35.795,30.178 35.795,19.396 24,26.778 31.73,32.592"></polygon><polygon fill="#00b3d7" points="16.577,32.592 24,26.778 12.946,19.632 13,30.452"></polygon>
            </svg>
        </div>
    );
}

export default RoundChart;