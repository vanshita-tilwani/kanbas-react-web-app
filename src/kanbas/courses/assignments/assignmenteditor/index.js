import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaPlus, FaCheckCircle} from "react-icons/fa";
import {FaEllipsisVertical,FaX} from "react-icons/fa6";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  updateAssignment,
  setAssignment,
} from ".././assignmentsReducer";
import * as service from "../service";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();

  const handleUpdateAssignment = async () => {
    await service.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

  const handleAddAssignment = async() => {
    service.createAssignment(courseId, assignment).then((assignment) => {
      dispatch(addAssignment(assignment));
    });
  };

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = async() => {
    const existingAssignment = assignments.find((ass) => ass._id === assignmentId);
    if (existingAssignment) {
      await handleUpdateAssignment();
    } else {
      await handleAddAssignment();
    }
    navigate(`/Kanbas/Courses/${courseId}/assignments`);
  };

  return (
    <div className="assignment-editor">
      <div className="assignment-editor-header-buttons">
        <FaCheckCircle className="align-self-center icon-margin-small" style={{ color: "green" }} />
        <div className="assignment-editor-published-text align-self-center icon-margin">Published</div>
        <button className="btn btn-light">
          <FaEllipsisVertical />
        </button>
      </div>
      <hr />
      <div>
        <form>
          <div className="continer">
            <div className="row p-2">
              <label htmlFor="assignment-name-text-field" className="col-12 assignment-title">Assignment Name</label>
              <input id="assignment-name-text-field" type="text" value={assignment.title} className="form-control col-12"  onChange={(e) => dispatch(setAssignment({ ...assignment, title: e.target.value }))} />
            </div>
            <div className="row p-2">
              <input id="assignment-description-text-field" placeholder="Description" value={assignment.description} className="form-control col-12" onChange={(e) => dispatch(setAssignment({ ...assignment, description: e.target.value }))} />
            </div>
            <div className="row p-2">
              <label htmlFor="points-text-field"
                className="col-3 assignment-edit-content-title align-self-center">Points</label>
              <input id="points-text-field" type="number"
                className="form-control col-6 assignment-edit-content-form" value="100" />
            </div>
            <div className="row p-2">
              <label htmlFor="assignment-group-text-field"
                className="col-3 assignment-edit-content-title align-self-center">Assignment Group</label>
              <select id="assignment-group-text-field"
                className="form-select assignment-edit-content-form">
                <option selected>ASSIGNMENTS</option>
              </select>
            </div>
            <div className="row p-2">
              <label htmlFor="assignment-grade-display-text-field"
                className="col-3 assignment-edit-content-title align-self-center">Display Grade as</label>
              <select id="assignment-grade-display-text-field"
                className="form-select assignment-edit-content-form">
                <option selected>Percentage</option>
              </select>
            </div>
            <div className="row p-2">
              <label className="col-3 assignment-edit-content-title"></label>
              <div className="assignment-edit-content-form">
                <input type="checkbox" id="grade-to-final" className="checkbox-margin-right" />
                <label htmlFor="grade-to-final">Do not count this assignment towards the final
                  grade</label>
              </div>
            </div>
            <div className="row p-2">
              <label className="col-3 assignment-edit-content-title">Submission Type</label>
              <div className="assignment-edit-content-form submission-type-continar">
                <div className="row p-2">
                  <select id="assignment-submission-type-text-field" className="form-select">
                    <option selected>Online</option>
                  </select>
                </div>
                <div className="row p-2">
                  <div className="assignment-edit-online-entry-text">Online Entry Option</div>
                  <div>
                    <input type="checkbox" checked id="text-entry" className="checkbox-margin-right"/>
                    <label htmlFor="text-entry">Text Entry</label>
                  </div>
                  <div>
                    <input type="checkbox" checked id="website-entry" className="checkbox-margin-right"/>
                    <label htmlFor="website-entry">Website URL</label>
                  </div>
                  <div>
                    <input type="checkbox" checked id="media-entry" className="checkbox-margin-right"/>
                    <label htmlFor="media-entry">Media Recordings</label>
                  </div>
                  <div>
                    <input type="checkbox" id="student-annotation-entry" className="checkbox-margin-right"/>
                    <label htmlFor="student-annotation-entry">Student Annotation</label>
                  </div>
                  <div>
                    <input type="checkbox" id="file-entry" className="checkbox-margin-right"/>
                    <label htmlFor="file-entry">File Uploads</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row p-2">
              <label className="col-3 assignment-edit-content-title">Assign</label>
              <div className="assignment-edit-content-form submission-type-continar">
                <div className="row p-2">
                  <label className="assignment-edit-online-entry-text">Assign to</label>
                  <div className="form-control">
                    <button type="button" className="btn btn-light">
                      Everyone
                      <FaX className="x-icon" />
                    </button>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="assignment-edit-online-entry-text">Due to</div>
                  
                    <input className="form-control" type="date" id="text-fields-until" value={assignment.dueDate} 
                    onChange={(e) => dispatch(setAssignment({ ...assignment, dueDate: e.target.value }))}/>
                </div>
                <div className="row p-2">
                  <div className="col-6 assignment-edit-online-entry-text">Available from</div>
                  <div className="col-6 assignment-edit-online-entry-text">Until</div>
                  <input className="form-control assignment-edit-content-half-size-date"
                    type="date" id="text-fields-until" value={assignment.availableFromDate} 
                    onChange={(e) => dispatch(setAssignment({ ...assignment, availableFromDate: e.target.value }))}/>
                  <input className="form-control assignment-edit-content-half-size-date"
                    type="date" id="text-fields-until" value={assignment.availableUntilDate} 
                    onChange={(e) => dispatch(setAssignment({ ...assignment, availableUntilDate: e.target.value }))}/>
                </div>
                <div className="row">
                  <button type="button" className="btn btn-light add-button">
                  <FaPlus />
                    Add
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-6 align-self-center">
                <input type="checkbox" id="notify-user-content-changed" className="checkbox-margin-right" />
                <label htmlFor="notify-user-content-changed">Notify users that this content has
                  changed</label>
              </div>
              <div className="col-6 align-self-center">
                <button onClick={handleSave} className="btn btn-danger float-end courses-home-module-button save-button">
                  Save
                </button>
                <Link to={`/Kanbas/Courses/${courseId}/assignments`} className="btn btn-light courses-home-module-button float-end">
                  Cancel
                </Link>
              </div>
            </div>
            <hr />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AssignmentEditor;