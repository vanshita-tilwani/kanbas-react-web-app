import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaCheckCircle} from "react-icons/fa";
import {FaEllipsisVertical,FaX} from "react-icons/fa6";
import "./quizdetailseditor.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addQuiz,
  updateQuiz,
  setQuiz,
} from "../quizReducer";
import * as service from "../client";


function QuizDetailsEditor() {
  const { quizId } = useParams();
  const quizzes = useSelector((state) => state.quizReducer.quizzes);
  const quiz = useSelector((state) => state.quizReducer.quiz);
  const dispatch = useDispatch();

  const handleUpdateQuiz = async () => {
    await service.updateQuiz(quiz);
    dispatch(updateQuiz(quiz));
  };

  const handleAddQuiz= async() => {
    service.createQuiz(courseId, quiz).then((quiz) => {
      dispatch(addQuiz(quiz));
    });
  };

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = async() => {
    const exisitingQuiz = quizzes.find((quiz) => quiz._id === quizId);
    if (exisitingQuiz) {
      await handleUpdateQuiz();
    } else {
      await handleAddQuiz();
    }
    navigate(`/Kanbas/Courses/${courseId}/Quizzes`);
  };

  return (
    <div className="quiz-details-editor">
      <div className="quiz-details-editor-header-buttons">
        <FaCheckCircle className="align-self-center icon-margin-small" style={{ color: "green" }} />
        <div className="quiz-details-editor-published-text align-self-center icon-margin">Published</div>
        <button className="btn btn-light">
          <FaEllipsisVertical />
        </button>
      </div>
      <hr />
      <div>
        <form>
          <div className="container">
            <div className="row p-2">
              <label className="col-12 quiz-details-title">Quiz Name</label>
              <input type="text" value={quiz.name} className="form-control col-12"  onChange={(e) => dispatch(setQuiz({ ...quiz, name: e.target.value }))} />
            </div>
            <div className="row p-2">
            <label className="col-12 quiz-details-title">Quiz Description</label>
              <input placeholder="Description" value={quiz.description} className="form-control col-12" onChange={(e) => dispatch(setQuiz({ ...quiz, description: e.target.value }))} />
            </div>
            <div className="row p-2">
              <label
                className="col-3 quiz-details-edit-content-title align-self-center">Quiz Type</label>
              <select
                className="form-control col-6 quiz-details-edit-content-form" value="100">
                  <option selected>Graded Quiz</option>
                </select>
            </div>
            <div className="row p-2">
              <label
                className="col-3 quiz-details-edit-content-title align-self-center">Assignment Group</label>
              <select
                className="form-control col-6 quiz-details-edit-content-form">
                <option selected>Assignments</option>
              </select>
            </div>
            <div className="row p-2">
              <label
                className="col-4 quiz-details-edit-content-title align-self-center" style={{fontWeight: "bold"}}>Options</label>
            </div>
            <div className="row p-2">
              
            <label className="col-3 quiz-details-edit-content-title"></label>
              <div className="quiz-details-edit-content-form">
                <input type="checkbox" className="checkbox-margin-right" />
                <label>Shuffle Questions</label>
              </div>
            </div>
            <div className="row p-2">
              <label className="col-3 quiz-details-edit-content-title"></label>
              <div className="quiz-details-edit-content-form">
                <input type="checkbox" className="checkbox-margin-right" />
                <label>Time Limit</label>
                <input type="number" style={{width : "50px"}} className="checkbox-margin-left checkbox-margin-right" />
                <label className="col-3">Minutes</label>
              </div>
            </div>

            <div className="row p-2">
              <label className="col-3 quiz-details-edit-content-title"></label>
              <div className="quiz-details-edit-content-form">
                <input type="checkbox" className="checkbox-margin-right" />
                <label>Allow Multiple Attempts</label>
              </div>
            </div>

            <div className="row p-2">
              <label className="col-3 quiz-details-edit-content-title">Assign</label>
              <div className="quiz-details-edit-content-form submission-type-continar">
                <div className="row p-2">
                  <label className="quiz-details-edit-online-entry-text">Assign to</label>
                  <div className="form-control">
                    <button type="button" className="btn btn-light">
                      Everyone
                      <FaX className="x-icon" />
                    </button>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="quiz-details-edit-online-entry-text">Due to</div>
                  
                    <input className="form-control" type="date" id="text-fields-until" value={quiz.dueDate} 
                    onChange={(e) => dispatch(setQuiz({ ...quiz, dueDate: e.target.value }))}/>
                </div>
                <div className="row p-2">
                  <div className="col-6 quiz-details-edit-online-entry-text">Available from</div>
                  <div className="col-6 quiz-details-edit-online-entry-text">Until</div>
                  <input className="form-control quiz-details-edit-content-half-size-date"
                    type="date" id="text-fields-until" value={quiz.availableFromDate} 
                    onChange={(e) => dispatch(setQuiz({ ...quiz, availableFromDate: e.target.value }))}/>
                  <input className="form-control quiz-details-edit-content-half-size-date"
                    type="date" id="text-fields-until" value={quiz.availableUntilDate} 
                    onChange={(e) => dispatch(setQuiz({ ...quiz, availableUntilDate: e.target.value }))}/>
                </div>
                
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-6 align-self-center">
                <input type="checkbox" id="notify-user-content-changed" className="checkbox-margin-right" />
                <label for="notify-user-content-changed">Notify users this quiz has
                  changed</label>
              </div>
              <div className="col-6 align-self-center">
                <button onClick={handleSave} className="btn btn-danger float-end courses-home-module-button save-button">
                  Save
                </button>
                <button onClick={handleSave} className="btn btn-light courses-home-module-button float-end">
                  Save & Publish
                </button>
                <Link to={`/Kanbas/Courses/${courseId}/Quizzes`} className="btn btn-light courses-home-module-button float-end">
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

export default QuizDetailsEditor;