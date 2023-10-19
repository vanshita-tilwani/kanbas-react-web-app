import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../database";
import "./index.css";
import { FaPlus, FaCheckCircle, FaCaretDown} from "react-icons/fa";
import {FaEllipsisVertical,FaPenToSquare} from "react-icons/fa6"


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="assignment">
      <div className="d-flex justify-content-between">
        <input
          type="text"
          className="form-control w-25"
          placeholder="Search for Assignment"
        />
        <div className="assignment-buttons">
          <button className="btn btn-light assignment-button">
            <FaPlus className="icon-margin" />
            Group
          </button>
          <button className="btn btn-danger assignment-button">
            <FaPlus className="icon-margin" />
            Assignment
          </button>
          <button className="btn btn-light assignment-button">
            <FaEllipsisVertical />
          </button>
        </div>
      </div>
      <hr />
      <div className="assignment-list">
        <ul className="list-group">
          <li className="list-group-item list-group-item-secondary assignment-list-item">
            <div className="d-flex flex-row align-items-center">
              <FaEllipsisVertical />
              <FaEllipsisVertical className="icon-margin-small" />
              <FaCaretDown className="icon-margin-small" />
              <div className="assignment-text">Assignments</div>
            </div>
            <div className="d-flex flex-row align-items-center">
              <button className="btn rounded-pill assignment-title-total icon-margin">40% of Total</button>
              <FaPlus className="icon-margin" />
              <FaEllipsisVertical />
            </div>
          </li>
          {courseAssignments.map((assignment) => (
            <li className="list-group-item assignment-list-item assignment-list-item-green-border">
              <div className="d-flex flex-row align-items-center">
                <FaEllipsisVertical />
                <FaEllipsisVertical className="icon-margin" />
                <FaPenToSquare style={{ color: "green" }} className="fa-regular icon-margin" />
                <div>
                  <div className="assignment-title">
                    <Link
                      key={assignment._id}
                      to={`/kanbas/courses/${courseId}/assignments/${assignment._id}`}>
                      {assignment.title}
                    </Link>
                  </div>
                  <div>
                    <span style={{ color: "red" }}>Multiple Modules </span>
                    | Due Sep 11, 2022 at 11:59am | 100 pts
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center">
                <FaCheckCircle style={{ color: "green" }} className="icon-margin" />
                <FaEllipsisVertical />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Assignments;