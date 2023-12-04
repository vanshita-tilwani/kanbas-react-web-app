import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";
const BASE_URL = process.env.REACT_APP_API_BASE; //https://kanbas-node-server-app-ztc3.onrender.com

function Assignment5() {
    return (
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href={`${BASE_URL}/a5/welcome`}
             className="list-group-item">
            Welcome
          </a>
        </div>
        <h3>Simple API Examples</h3>
        <EncodingParametersInURLs/>
        <WorkingWithObjects/>
        <WorkingWithArrays/>
      </div>
    );
  }
  export default Assignment5;