import React, {useState} from 'react';
import Table from "./table";
import Wave from "./wave";
import Circle from "./circle";
import Circle2 from "./circle2";

const Test2 = () => {

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

    const waveData = [50, 10, 80, 30, 75, 100, 86, 25];

    function handleChoose(i) {
        setChosenData(i);
    }

    return (<>
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
                    {waveData.map((i) => <Wave percentage={i} text="Title"/>)}
                </div>
            </div>
            <div className="flex">
                <div className='container flex flex-wrap space-around'>
                    <Circle data="50" text="Title"/>
                    <Circle data="100" text="Title"/>
                    <Circle data="76" text="Title"/>
                </div>
                <Circle2 percentage={61}/>
            </div>
        </>
    );
}

export default Test2;