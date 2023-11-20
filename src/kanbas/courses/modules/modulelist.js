import React,{ useEffect } from "react";
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
  setModules,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
    // eslint-disable-next-line 
  }, [courseId]);

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleUpdateModule = async () => {
    await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  
  return (
    <div className="module-list">
      <li className="list-group-item">
      <button className="btn btn-success small-margin-right" style={{ verticalAlign: "top" }}
          onClick={handleAddModule}>
          Add
        </button>
        <button className="btn btn-primary" style={{ verticalAlign: "top" }}
          onClick={handleUpdateModule}>
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
              onClick={() => handleDeleteModule(module._id)}>
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
