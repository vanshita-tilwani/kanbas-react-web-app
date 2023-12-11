import { FaPlus} from "react-icons/fa";
import ModuleList from "./modulelist";
import "./index.css";

function Modules() {
  return (
    <div className="modules">
      <div className="home-buttons">
        <div className="dropdown">
          
          <ul className="dropdown-menu">
          {/* eslint-disable-next-line */}
            <li><a className="dropdown-item" href="#">Week 0 - INTRO</a></li>
            {/* eslint-disable-next-line */}
            <li><a className="dropdown-item" href="#">Week 1 - HTML</a></li>
            {/* eslint-disable-next-line */}
            <li><a className="dropdown-item" href="#">Week 2 - CSS</a></li>
          </ul>
        </div>
        <button className="btn btn-danger home-button">
          <FaPlus />
          Module
        </button>
      </div>
      <hr />
      <div className="module-list">
        <ModuleList />
      </div>
    </div>
  );
}

export default Modules;