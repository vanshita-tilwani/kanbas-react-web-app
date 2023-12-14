import React,{ useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./quizlist.css";
import { FaPlus, FaCheckCircle, FaCaretDown} from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteQuiz,
  setQuiz,
  setQuizzes,
} from "./quizReducer";
import * as client from "./client";
import ThreeDotsMenu from "./ThreeDotsMenu";
import moment from "moment/moment";

function QuizList() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    client.findQuizForCourse(courseId)
      .then((quizzes) =>
        dispatch(setQuizzes(quizzes))
    );
    // eslint-disable-next-line 
  }, [courseId]);

  const handleAddQuiz = () => {
    var newQuiz= { 
          
          name: "New Quiz", 
          description: "New Quiz Description",
          course: courseId,
          published : false,
          points: 0,
          shuffleAnswers: false,
          timeLimit: 0,
          multipleAttempts:false,
          dueDate: moment().utc().format('YYYY-MM-DD'),
          availableFrom: moment().utc().format('YYYY-MM-DD'),
          availableUntil: moment().utc().format('YYYY-MM-DD'),
    }
    dispatch(setQuiz(newQuiz));
    navigate(`/Kanbas/Courses/${courseId}/Quizzes/Edit/${-1}`)
  };

  const handleDeleteQuiz = (quizId) => {
    client.deleteQuiz(quizId).then((status) => {
      dispatch(deleteQuiz(quizId));
    });
  };

  const handlePublishOrUnpublishQuiz = (quiz, publish) => {
    var updatedQuiz = {...quiz, published : publish};
    try{
      client.updateQuiz(updatedQuiz).then((status) => {
        var updatedQuizzes = quizzes.filter(q => q._id !== quiz._id);
        updatedQuizzes.push(updatedQuiz);
        dispatch(setQuizzes(updatedQuizzes));
      })
      
    }
    catch(e) {

    }
  }

  const handleQuizEdit = (quiz, quizId) => {
    dispatch(setQuiz(quiz))
    navigate(`/Kanbas/Courses/${courseId}/Quizzes/Edit/${quizId}`)
  }

  const handleQuizPreview = (quiz, quizId) => {
    dispatch(setQuiz(quiz))
    navigate(`/Kanbas/Courses/${courseId}/Quizzes/Preview/${quizId}`)
  }

  const quizzes = useSelector((state) => state.quizReducer.quizzes);
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
            <li key={"item_" + quiz._id} className="list-group-item assignment-list-item assignment-list-item-green-border">
              <div className="d-flex flex-row align-items-center">
                <FaRocket style={{color : "green"}} className="icon-margin" />
                <div>
                  <div className="assignment-title">
                    <Link
                      key={quiz._id}  
                      onClick={() => dispatch(setQuiz(quiz))}
                      to={`/Kanbas/Courses/${courseId}/Quizzes/Details/${quiz._id}`}>
                      {quiz.name}
                    </Link>
                  </div>
                  <div>
                    <span style={{ color: "red" }}>Multiple Modules </span>
                    | Due {moment(quiz.dueDate.toString()).utc().format('YYYY-MM-DD')} at 11:59 PM | {quiz.points} pts
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center">
                
                <FaCheckCircle style={{ color: "green" , opacity: (quiz.published ? "1" : "0.3")}} className="icon-margin" />
                
                <ThreeDotsMenu 
                  onDelete = {() => {handleDeleteQuiz(quiz._id)}}
                  onEdit = {() => {handleQuizEdit(quiz, quiz._id)}}
                  isPublished = {quiz.published}
                  onPublish = {() => {handlePublishOrUnpublishQuiz(quiz, true)}}
                  onUnpublish = {() => {handlePublishOrUnpublishQuiz(quiz, false)}}
                  onPreview = {() => {handleQuizPreview(quiz, quiz._id)}}/>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
}

export default QuizList;
