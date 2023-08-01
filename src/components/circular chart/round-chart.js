import React, {useEffect} from 'react';
import CountUp from "react-countup";

function RoundChart(props) {

    useEffect(() => {
        document.getElementById('rott').classList.add("qwer");
    }, [])

    return (
        <div className="round-parent">
            <span className="value"><CountUp start={0} end={props.data}></CountUp> Cars</span>
            <div className="round" id='rott'
                 style={{background: `conic-gradient(#22D8E3 ${props.data-2}deg, transparent ${props.data+2}deg`}}></div>
        </div>
    );
}

export default RoundChart;