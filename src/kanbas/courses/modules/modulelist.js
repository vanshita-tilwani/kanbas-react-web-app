import React from "react";
import { useParams } from "react-router-dom";
import db from "../../database";
import "./modulelist.css";
import { FaPlus, FaCheckCircle, FaCaretDown} from "react-icons/fa";
import {FaEllipsisVertical} from "react-icons/fa6"

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules.filter((module) => module.course === courseId);

  return (
    <div className="module-list">
      {modules.map((module, index) => (
        <ul key={index} className="list-group">
          <li className="list-group-item list-group-item-secondary module-list-item">
            <div className="d-flex flex-row align-items-center">
              <FaEllipsisVertical />
              <FaEllipsisVertical className="icon-margin-small" />
              <FaCaretDown className="icon-margin" />
              <div>{module.name}</div>
            </div>
            <div className="d-flex flex-row align-items-center">
              <FaCheckCircle style={{ color: "green" }} className="icon-margin-small" />
              <FaCaretDown style={{ color: "black" }} className="icon-margin" />
              <FaPlus className="icon-margin" />
              <FaEllipsisVertical />
            </div>
          </li>
          <li className="list-group-item module-list-item">
            <div className="d-flex flex-row align-items-center">
              <FaEllipsisVertical />
              <FaEllipsisVertical className="icon-margin" />
              <div>{module.description}</div>
            </div>
            <div className="d-flex flex-row align-items-center">
              <FaCheckCircle style={{ color: "green" }} className="icon-margin" />
              <FaEllipsisVertical />
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default ModuleList;
