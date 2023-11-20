import React, {useEffect} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./index.css";
import { FaPlus, FaCheckCircle, FaCaretDown} from "react-icons/fa";
import {FaEllipsisVertical,FaPenToSquare} from "react-icons/fa6"
import { useSelector, useDispatch } from "react-redux";
import {
  deleteAssignment,
  setAssignment,
  setAssignments,
} from "./assignmentsReducer";
import * as service from "./service";

function Assignments() {
  const { courseId } = useParams();
  useEffect(() => {
    service.findAssignmentsForCourse(courseId)
      .then((assignments) =>
        dispatch(setAssignments(assignments))
    );
    // eslint-disable-next-line 
  }, [courseId]);
  const navigate = useNavigate();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const dispatch = useDispatch();

  const handleAddAssignment = () => {
    const newAssignment = {
      title: "New Assignment",
      description: "New Assignment Description",
      course: courseId,
      _id: new Date().getTime().toString(),
    };
    dispatch(setAssignment(newAssignment));
    navigate(`/kanbas/courses/${courseId}/assignments/${newAssignment._id}`);
  }
 
  const handleDeleteAssignment = (moduleId) => {
    if ( window.confirm('Are you sure that you wish to remove the assignment?')) {
    service.deleteAssignment(moduleId).then((status) => {
      dispatch(deleteAssignment(moduleId));
    });
  }
  };


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
          <button className="btn btn-danger assignment-button" onClick={handleAddAssignment}>
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
          {assignments.map((assignment) => (
            <li className="list-group-item assignment-list-item assignment-list-item-green-border">
              <div className="d-flex flex-row align-items-center">
                <FaEllipsisVertical />
                <FaEllipsisVertical className="icon-margin" />
                <FaPenToSquare style={{ color: "green" }} className="fa-regular icon-margin" />
                <div>
                  <div className="assignment-title">
                    <Link
                      key={assignment._id}  
                      onClick={() => dispatch(setAssignment(assignment))}
                      to={`/kanbas/courses/${courseId}/assignments/${assignment._id}`}>
                      {assignment.title}
                    </Link>
                  </div>
                  <div>
                    <span style={{ color: "red" }}>Multiple Modules </span>
                    | Due {assignment.dueDate} at 11:59 PM | 100 pts
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center">
                <button className="btn btn-danger icon-margin" onClick={() => handleDeleteAssignment(assignment._id)}>
                  Delete
                </button>
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