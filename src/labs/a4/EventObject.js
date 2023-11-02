import React, { useState } from 'react';

function EventObject() {
    // initialize event using the useState hook
    const [event, setEvent] = useState(null);
    // onClick event handler receives event
    const handleClick = (e) => {
        // replace target with HTML
        e.target = e.target.outerHTML;
        // avoid circular reference
        delete e.view;
        // set event object to e
        setEvent(e);
    }
    return (
        <div>
            <h2>Event Object</h2>
            <button id='event-button' onClick={(e) => handleClick(e)} className='btn btn-primary'>Display Event Object</button>
            <pre>{JSON.stringify(event, null, 2)}</pre>
        </div>
    )
}

export default EventObject;