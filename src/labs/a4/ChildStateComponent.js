function ChildStateComponent({ counter, setCounter }) {
    return (
        <div>
            <h4> Child Counter {counter}</h4>
            <button onClick={() => setCounter(counter + 1)} className='btn btn-success m-3'>Increment</button>
            <button onClick={() => setCounter(counter - 1)} className='btn btn-danger'>Decrement</button>
        </div>
    )
}

export default ChildStateComponent;