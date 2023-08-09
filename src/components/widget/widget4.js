import React, {useEffect, useRef, useState, createRef} from 'react';

function Widget3({data}) {

    let refs = useRef([]);
    refs.current = data.map((element, i) => refs.current[i] ?? createRef());
    let circleRef = useRef(null);
    let iconRef = useRef(null);

    const [main, setMain] = useState(0);

    function childClick(n) {
        setMain(n);
    }


    useEffect(() => {
        circleRef.current.style.transform = `rotate(${main*90+45}deg)`;
        refs.current.forEach((i) => i.current.style.transform = `rotate(-${main*90+45}deg)`);
        iconRef.current.style.transform = `rotate(-${main*90+45}deg)`;
    }, [main])

    return (
        <div className="widget3-parent">
            <div className='widget3-circle' ref={circleRef}>
                {data.map((element, i) =>
                    <div key={i}
                         className={main === i ? `widget3-child main-child widget3-child${element.id}` : `widget3-child widget3-child${element.id}`}
                         onClick={() => childClick(i)}>
                        <div className={main === i ? "widget3-text widget3-main-text" : "widget3-text"} ref={refs.current[i]}>
                            <p>{element.time}</p>
                            <p>{element.amount}</p>
                        </div>
                    </div>)}
                <i className="fa-solid fa-bicycle widget3-icon" ref={iconRef}></i>
            </div>
        </div>
    );
}

export default Widget3;