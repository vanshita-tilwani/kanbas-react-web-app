import React, { useState } from 'react';

function DateStateVariable() {
    const [startDate, setStartDate] = useState(new Date());
    const dateObjectToHtmlDateString = (date) => {
        return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${date.getMonth() + 1}-${date.getDate() + 1 < 10 ? 0 : ""}${date.getDate() + 1}`;
    }
    return (
        <div>
            <h2>Date State Variables</h2>
            <h5>{JSON.stringify(startDate)}</h5>
            <input className='form-control' type='date' value={dateObjectToHtmlDateString(startDate)} onChange={(e) => setStartDate(new Date(e.target.value))} />
        </div>
    )
}

export default DateStateVariable;