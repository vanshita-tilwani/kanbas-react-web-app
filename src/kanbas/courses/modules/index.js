import { FaPlus, FaCheckCircle} from "react-icons/fa";
import {FaEllipsisVertical} from "react-icons/fa6"
import ModuleList from "./modulelist";
import "./index.css";

function Modules() {
  return (
    <div className="modules">
      <div className="home-buttons">
        <button className="btn btn-light home-button">
          Collapse All
        </button>
        <button className="btn btn-light home-button">
          View Progress
        </button>
        <div className="dropdown">
          <button className="btn btn-light dropdown-toggle home-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <FaCheckCircle className="circle-check-icon" />
            Publish All
          </button>
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
        <button className="btn btn-light home-button">
          <FaEllipsisVertical />
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