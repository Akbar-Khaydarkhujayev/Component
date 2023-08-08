import React, {useEffect, useRef, useState} from 'react';

function Widget3({data}) {

    const circleRef = useRef(null);

    const [main, setMain] = useState(1);

    function childClick(n) {
        setMain(n);
    }


    useEffect(() => {
        let noRotate = document.getElementsByClassName("widget3-no-rotate");

        if (main === 1) {
            circleRef.current.style.transform = "rotate(45deg)";
            Array.from(noRotate).forEach((i) => i.style.transform = "rotate(-45deg)");
        } else if (main === 2) {
            circleRef.current.style.transform = "rotate(315deg)"
            Array.from(noRotate).forEach((i) => i.style.transform = "rotate(-315deg)");
        } else if (main === 3) {
            circleRef.current.style.transform = "rotate(135deg)"
            Array.from(noRotate).forEach((i) => i.style.transform = "rotate(-135deg)");
        } else if (main === 4) {
            circleRef.current.style.transform = "rotate(225deg)"
            Array.from(noRotate).forEach((i) => i.style.transform = "rotate(-225deg)");
        }
    }, [main])

    return (
        <div className="widget3-parent">
            <div className='widget3-circle' ref={circleRef}>
                {data.map((i) =>
                    <div key={i.id} className={main === i.id ? `widget3-child main-child widget3-child${i.id}` : `widget3-child widget3-child${i.id}`}
                        onClick={() => childClick(i.id)}>
                        <div className="widget3-text widget3-no-rotate">
                            <p>{i.time}</p>
                            <p>{i.amount}</p>
                        </div>
                    </div>)}
                <i className="fa-solid fa-bicycle widget3-icon widget3-no-rotate"></i>
            </div>
        </div>
    );
}

export default Widget3;