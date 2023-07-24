import React, {useState, useEffect} from 'react';
import CountUp from 'react-countup';

function Circle({data, text}) {

    const [degree, setDegree] = useState(0);

    useEffect(() => {
        setDegree(data * 180 / 100);
    }, []);

    return (
        <div className="position-relative">
            <div className='circle-text'><span className="circle-percentage"><CountUp  start={0} end={data} /></span><sup>%</sup><br/>{text}
            </div>
            <div className="rotateX">
                <div className="circle"
                     style={{transform: `rotate(-${degree}deg)`}}>
                </div>
                <div className="circle2">
                </div>
                <div className="hide-box"></div>
            </div>
        </div>
    );
}

export default Circle;