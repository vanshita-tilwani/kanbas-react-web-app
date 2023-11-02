import React from "react";
import { useParams } from "react-router-dom";
import "./modulelist.css";
import { FaPlus, FaCheckCircle, FaCaretDown} from "react-icons/fa";
import {FaEllipsisVertical} from "react-icons/fa6"
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  
  return (
    <div className="module-list">
      <li className="list-group-item">
      <button className="btn btn-success small-margin-right" style={{ verticalAlign: "top" }}
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
          Add
        </button>
        <button className="btn btn-primary" style={{ verticalAlign: "top" }}
          onClick={() => dispatch(updateModule(module))}>
          Update
        </button>
        <input style={{ verticalAlign: "top" }}
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }/>
        <textarea
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }/>

      </li>

      {modules
      .filter((module) => module.course === courseId)
      .map((module, index) => (
        <ul key={index} className="list-group">
          <li className="list-group-item list-group-item-secondary module-list-item">
          <button className="btn btn-success small-margin-right"
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
            <button className="btn btn-danger"
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>

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
