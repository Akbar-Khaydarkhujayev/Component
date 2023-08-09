import React, {useState} from 'react';
import Table from "../components/table/table";
import Wave from "../components/water/wave";
import Circle from "../components/circle progress/circle";
import BoxProgress from "../components/box progress/box-progress";
import BarChart from "../components/bar chart/bar-chart";
import RoundChart from "../components/circular chart/round-chart";
import ShareButton from "../components/share button/share-button";
import Button from "../components/custom button/button";
import TripleCircle from "../components/triple-circle/triple-circle";
import IconAndNum from "../components/icon and num/icon-and-num";
import DatePick1 from "../components/date pick/date-pick1";
import Widget from "../components/widget/widget";
import Widget1 from "../components/widget/widget1";
import Widget2 from "../components/widget/widget2";
import Widget3 from "../components/widget/widget3";
import Widget4 from "../components/widget/widget4";

function Home() {

    const [chosenData, setChosenData] = useState(0);
    const [sortByID, setSortByID] = useState(true);

    const tableData = [[{
        id: 1,
        company: 'Alfreds',
        contact: 'Maria',
        dist: 100,
    }, {
        id: 2,
        company: 'Centro',
        contact: 'Francisco',
        dist: 80,
    }, {
        id: 3,
        company: 'Sour',
        contact: 'Arnold',
        dist: 50,
    }, {
        id: 4,
        company: 'Nara',
        contact: 'Katerina',
        dist: 25,
    }], [{
        id: 1,
        company: 'Alfreds',
        contact: 'Sasha',
        dist: 100,
    }, {
        id: 2,
        company: 'Centro',
        contact: 'Nadya',
        dist: 60,
    }, {
        id: 3,
        company: 'Sour',
        contact: 'Ivan',
        dist: 70,
    }, {
        id: 4,
        company: 'Nara',
        contact: 'Pavel',
        dist: 200,
    }], [{
        id: 1,
        company: 'Alfreds',
        contact: 'Daler',
        dist: 80,
    }, {
        id: 2,
        company: 'Centro',
        contact: 'Javohir',
        dist: 300,
    }, {
        id: 3,
        company: 'Sour',
        contact: 'Akbar',
        dist: 100,
    }, {
        id: 4,
        company: 'Nara',
        contact: 'Muhammad',
        dist: 10,
    }]];

    const widget3_data = [{
        id: 1,
        time: 'Morning',
        amount: 300,
    }, {
        id: 2,
        time: 'Noon',
        amount: 400,
    }, {
        id: 3,
        time: 'Afternoon',
        amount: 500,
    }, {
        id: 4,
        time: 'Evening',
        amount: 600,
    }];

    const widget4_data = [{
        id: 1,
        icon: "fa-solid fa-car",
        amount: 300,
    }, {
        id: 2,
        icon: "fa-solid fa-video",
        amount: 400,
    }, {
        id: 3,
        icon: "fa-solid fa-person",
        amount: 500,
    }, {
        id: 4,
        icon: "fa-solid fa-person-dress",
        amount: 600,
    }];

    const waveData = [50, 10, 80, 30, 75, 100, 86, 25];

    function handleChoose(i) {
        setChosenData(i);
    }

    return (
        <>
            <div className="flex" style={{backgroundColor: "#03156B", padding: "20px"}}>
                <Widget3 data={widget3_data}/>
                <Widget4 data={widget4_data}/>
            </div>
            <div className="flex" style={{backgroundColor: "#03156B", padding: "20px"}}>
                <Widget2 text="Number" number={500}/>
                <Widget2 text="Some text" number={999}/>
                <Widget2 text="This text" number={9100}/>
            </div>
            <div className="flex" style={{backgroundColor: "#03156B", padding: "20px"}}>
                <Widget1 number={154} icon="fa-solid fa-bus"/>
                <Widget1 number={777} icon="fa-regular fa-building"/>
                <Widget1 number={154683} icon="fa-solid fa-pencil"/>
            </div>
            <div className="flex" style={{backgroundColor: "#03156B", padding: "20px"}}>
                <Widget text="Chevrolet" number={15000} icon="fa-solid fa-computer widget-icon"/>
                <Widget text="Some text" number={9191} icon="fa-solid fa-print widget-icon"/>
                <Widget text="Description   " number={191919} icon="fa-solid fa-desktop widget-icon"/>
            </div>
            <div style={{backgroundColor: "#03156B"}}>
                <DatePick1/>
            </div>
            <div className="flex">
                <TripleCircle
                    data={[['ff1300', 200, "DAMAGED"], ['00feff', 50, "ON PROGRESS"], ['00ff60', 100, "RECOVERED"]]}/>
            </div>
            <div className='container3 flex space-around'>
                <IconAndNum color="#1ED3F3" icon="fa-solid fa-video hexagon-icon" number={100} text="Any text"/>
                <IconAndNum color="#004aff" icon="fa-solid fa-video hexagon-icon" number={30} text="Text 1"/>
                <IconAndNum color="#1ED3F3" icon="fa-solid fa-video hexagon-icon" number={90} text="Text 2 "/>
                <IconAndNum color="#004aff" icon="fa-solid fa-video hexagon-icon" number={10} text="Text 3"/>
            </div>
            <div className="flex">
                <div className='container2 flex space-around'>
                    <ShareButton icon="fa-brands fa-facebook" text="Facebook"/>
                    <ShareButton icon="fa-brands fa-telegram" text="Telegram"/>
                    <ShareButton icon="fa-brands fa-github" text="Git"/>
                </div>
                <div className='container2 flex space-around'>
                    <Button icon="fa-solid fa-house button-icon1" text="Home"/>
                    <Button icon="fa-solid fa-camera button-icon1" text="Cameras"/>
                </div>
            </div>
            <div className="flex">
                <div className='container flex space-around'>
                    <BarChart/>
                </div>
                <div className='container1 flex space-around'>
                    <RoundChart data={140}/>
                    <RoundChart data={260}/>
                    <RoundChart data={50}/>
                </div>
            </div>
            <div className="flex">
                <div className='container'>
                    <div className="flex space-around">
                        <div>
                            <h1 className="title"><i className="fa-regular fa-chart-bar"></i>Title</h1>
                        </div>
                        <div className="flex">
                            <div className={chosenData === 0 ? "pagination-choices active" : "pagination-choices"}
                                 onClick={() => handleChoose(0)}>Data 1
                            </div>
                            <div className={chosenData === 1 ? "pagination-choices active" : "pagination-choices"}
                                 onClick={() => handleChoose(1)}>Data 2
                            </div>
                            <div className={chosenData === 2 ? "pagination-choices active" : "pagination-choices"}
                                 onClick={() => handleChoose(2)}>Data 3
                            </div>
                        </div>
                    </div>
                    <div className="glowing-line"></div>
                    <div className='flex space-around'>
                        <div>
                            <div className={sortByID ? "pagination-choices m-t-14 active" : "pagination-choices m-t-14"}
                                 onClick={() => setSortByID(true)}
                            >By ID
                            </div>
                            <div className={sortByID ? "pagination-choices m-t-14" : "pagination-choices m-t-14 active"}
                                 onClick={() => setSortByID(false)}
                            >By KM
                            </div>
                        </div>
                        <div><Table data={tableData[chosenData]} sortByID={sortByID}/></div>
                    </div>
                </div>
                <div className='container flex flex-wrap space-around'>
                    {waveData.map((i) => <Wave key={i} percentage={i} text="Title"/>)}
                </div>
            </div>
            <div className="flex">
                <div className='container flex flex-wrap space-around'>
                    <Circle data="50" text="Title"/>
                    <Circle data="99" text="Title"/>
                    <Circle data="76" text="Title"/>
                </div>
                <div className='container flex flex-wrap space-around'>
                    <BoxProgress percentage={1}/>
                </div>
            </div>
        </>
    );
}

export default Home;