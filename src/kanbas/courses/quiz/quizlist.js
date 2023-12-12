import React,{ useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./quizlist.css";
import { FaPlus, FaCheckCircle, FaCaretDown} from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  addQuiz,
  deleteQuiz,
  setQuiz,
  setQuizzes,
} from "./quizReducer";
import * as client from "./client";
import ThreeDotsMenu from "./ThreeDotsMenu";

function QuizList() {
  const { courseId } = useParams();
  useEffect(() => {
    client.findQuizForCourse(courseId)
      .then((quizzes) =>
        dispatch(setQuizzes(quizzes))
    );
    // eslint-disable-next-line 
  }, [courseId]);

  const handleAddQuiz = () => {
    client.createQuiz(courseId, quiz).then((quiz) => {
      dispatch(addQuiz(quiz));
    });
  };

  const handleDeleteQuiz = (quizId) => {
    client.deleteQuiz(quizId).then((status) => {
      dispatch(deleteQuiz(quizId));
    });
  };

  const quizzes = useSelector((state) => state.quizReducer.quizzes);
  const quiz = useSelector((state) => state.quizReducer.quiz);
  const dispatch = useDispatch();
  return (
    <div className="assignment">
      <div className="d-flex justify-content-between">
        <input
          type="text"
          className="form-control w-25"
          placeholder="Search for Quiz"
        />
        <div className="assignment-buttons">
          
          <button className="btn btn-danger assignment-button" onClick={handleAddQuiz}>
            <FaPlus className="icon-margin" />
            Quiz
          </button>
        </div>
      </div>
      <hr />
      <div className="assignment-list">
        <ul className="list-group">
          <li className="list-group-item list-group-item-secondary assignment-list-item">
            <div className="d-flex flex-row align-items-center">
              <FaCaretDown className="icon-margin-small" />
              <div className="assignment-text">Assignment Quizzes</div>
            </div>
          </li>
          {quizzes
      .filter((quiz) => quiz.course === courseId)
      .map((quiz)  => (
            <li className="list-group-item assignment-list-item assignment-list-item-green-border">
              <div className="d-flex flex-row align-items-center">
                <FaRocket style={{color : "green"}} className="icon-margin" />
                <div>
                  <div className="assignment-title">
                    <Link
                      key={quiz._id}  
                      onClick={() => dispatch(setQuiz(quiz))}
                      to={`/kanbas/courses/${courseId}/assignments/${quiz._id}`}>
                      {quiz.name}
                    </Link>
                  </div>
                  <div>
                    <span style={{ color: "red" }}>Multiple Modules </span>
                    | Due {quiz.dueDate} at 11:59 PM | 100 pts
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center">
                
                <FaCheckCircle style={{ color: "green" , opacity: (quiz.published ? "1" : "0.3")}} className="icon-margin" />
                
                <ThreeDotsMenu onDelete = {() => {handleDeleteQuiz(quiz._id)} }/>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
}

export default QuizList;
