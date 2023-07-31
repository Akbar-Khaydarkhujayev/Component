import React from 'react';
import Bar from "./bar";

function BarChart(props) {
    return (
        <div className="chart-parent">
            <Bar date={2020} level={75}/>
            <Bar date={2021} level={150}/>
            <Bar date={2022} level={300}/>
            <Bar date={2023} level={225}/>
            <div className="legend">
                <div></div>
                <div>25</div>
                <div>50</div>
                <div>75</div>
                <div>100</div>
            </div>
        </div>
    );
}

export default BarChart;