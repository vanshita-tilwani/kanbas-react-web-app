function Add({ a, b }) {
    const add = (a, b) => {
        return parseInt(a) + parseInt(b);
    }
    return (
        <div>
            <h3>
                Add({a}, {b}) = {add(a, b)}
            </h3>
        </div>
    )
}

export default Add;