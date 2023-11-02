import React, { useState } from 'react';

function Counter() {
    // First argument is the state variable, second argument is the function to update the state variable
    const [count, setCount] = useState(7);
    console.log(count);
    return (
        <div>
            <h2>Coutner: {count}</h2>
            <button onClick={() => setCount(count + 1)} className='btn btn-primary'>Up</button>
            <button onClick={() => setCount(count - 1)} className='btn btn-primary'>Down</button>
        </div>
    )
}

export default Counter;