import React, {useState, useEffect} from 'react';

function Table(props) {

    const [rotate, setRotate] = useState(false);

    useEffect(() => {
        if (props.sortByID) {
            props.data.sort((a, b) => a.id - b.id);
        } else {
            props.data.sort((a, b) => a.dist - b.dist);
        }
    }, [props.sortByID]);

    useEffect(() => {
        setRotate(!rotate);
        if (props.sortByID) {
            props.data.sort((a, b) => a.id - b.id);
        } else {
            props.data.sort((a, b) => a.dist - b.dist);
        }
    }, [props.data]);

    const table = props.data.map((i) =>
        <tr key={i.id} className={rotate ? "row rotate0" : "row rotate360"}>
            <th>{i.id}</th>
            <td>{i.company}</td>
            <td>{i.contact}</td>
            <td>{i.dist} km</td>
        </tr>
    );

    return (
        <table className="table">
            <thead>
            <tr className="row row-title">
                <th>ID</th>
                <th>Company</th>
                <th>Contact</th>
                <th>Distance</th>
            </tr>
            </thead>

            <tbody>
            {table}
            </tbody>
        </table>
    );
}

export default Table;