// eslint-disable-next-line
import { useSelector, useDispatch } from "react-redux";

function HelloRedux() {
    // helloReducer comes from the store folder's index.js, and is defined in HelloRedux/helloReducer.js
    const { message } = useSelector((state) => state.helloReducer);
    return (
        <div>
            <h1>Hello Redux</h1>
            <h2>{message}</h2>
        </div>
    )
}
export default HelloRedux;