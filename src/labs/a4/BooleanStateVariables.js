import { useState } from "react";

function BooleanState() {
    const [done, setDone] = useState(false);
    return (
        <div>
            <h2>Boolean State Variables</h2>
            <p>{done ? 'Done' : 'Not Done'}</p>
            <label className="form-control">
                <input type="checkbox" checked={done} onChange={() => setDone(!done)} />
                Done
            </label>
            {done && <div className="alert alert-success">Yay! Done</div>}
        </div>
    )
}

export default BooleanState;