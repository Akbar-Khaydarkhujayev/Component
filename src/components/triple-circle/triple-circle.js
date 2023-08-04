import React from 'react';

function TripleCircle({data}) {

    return (
        <div className="triple-circle-parent" style={{margin: "10px"}}>
            <div className="flex space-around">
                {data.map((i) =>
                    <div key={data.indexOf(i)} className="triple-circle">
                        <div className="custom-circle circle-dotted" style={{border: `2px dotted ${'#' + i[0]}`}}>
                            <div className="custom-circle circle-solid" style={{border: `2px solid ${'#' + i[0]}`}}>
                                <div className="custom-circle circle-dashed"
                                     style={{backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23${i[0]}FF' stroke-width='3' stroke-dasharray='50' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e"`}}>
                                </div>
                                <div className="circle-data" style={{color: '#' + i[0]}}>{i[1]}</div>
                            </div>
                        </div>
                        <p style={{color: '#' + i[0]}}>{i[2]}</p>
                    </div>
                )}
            </div>
            <div className="margin-20px flex space-between">
                <div style={{width: `${data[0][1]*98/(data[0][1]+data[1][1]+data[2][1])}%`, backgroundColor: "#"+data[0][0], height: "5px"}}></div>
                <div style={{width: `${data[1][1]*98/(data[0][1]+data[1][1]+data[2][1])}%`, backgroundColor: "#"+data[1][0], height: "5px"}}></div>
                <div style={{width: `${data[2][1]*98/(data[0][1]+data[1][1]+data[2][1])}%`, backgroundColor: "#"+data[2][0], height: "5px"}}></div>
            </div>
        </div>
    );
}

export default TripleCircle;