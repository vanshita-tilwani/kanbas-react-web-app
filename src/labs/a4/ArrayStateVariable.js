import React, { useState } from 'react';

function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    }
    const deleteElement = (index) => {
        // eslint-disable-next-line
        setArray(array.filter((item, i) => i != index));
    }

    return (
        <div>
            <h2>Array State Variable</h2>
            <button onClick={addElement} className='btn btn-success m-3'>Add Element</button>
            <ul className='list-group'>
                {array.map((item, i) => (
                    <li key={i} className='list-group-item'>
                        <span className='me-5 fw-bold'>{item}</span>
                        <button onClick={() => deleteElement(i)} className='btn btn-danger'>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ArrayStateVariable;