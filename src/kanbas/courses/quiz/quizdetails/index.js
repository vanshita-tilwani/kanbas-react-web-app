
import "./index.css";
import { Link , useParams} from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { FaCheckCircle, FaRegTimesCircle} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import * as client from "../client";
import {
  setQuiz,
} from "../quizReducer";

function QuizDetails() {
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const {quizId} = useParams()
  
  const quiz = useSelector((state) => state.quizReducer.quiz);
  

  const handlePublishOrUnpublishQuiz = async() => {
    var updatedQuiz = {...quiz, published : !quiz.published};
    try{
      await client.updateQuiz(updatedQuiz)
      dispatch(setQuiz(updatedQuiz));
    }
    catch(e) {

    }
  }

  return (
    <div className="quiz-details-main">
      <div className="d-flex justify-content-between">
        <h3 style={{font : "18px Lato",alignSelf: "center"}} className=" w-25">Quiz Details</h3>
        <div className="quiz-details-buttons">
          {quiz.published && (<label className="btn quiz-details-button" style={{backgroundColor : "green"}}>
             <FaCheckCircle className="icon-margin" style={{ color: "white"}}/>
            Published
          </label>)}
          {!quiz.published && (<label className="btn btn-light quiz-details-button">
             <FaRegTimesCircle className="icon-margin"/>
            Unpublished
          </label>)}
          <button onClick={handlePublishOrUnpublishQuiz} className="btn btn-light quiz-details-button float-end">
            {quiz.published ? "Unpublish" : "Publish"}
          </button>
          <Link to={`/Kanbas/Courses/${courseId}/Quizzes/Preview/${quizId}`} className="btn btn-light quiz-details-button float-end">
            Preview
          </Link>
          <Link to={`/Kanbas/Courses/${courseId}/Quizzes/Edit/${quizId}`} className="btn btn-light quiz-details-button float-end">
            <CiEdit/>
            Edit
          </Link>
        </div>
      </div>
      <hr />

      <form>
          <div className="container">
          <div className="row p-2">
              <h2 style={{font : "35px Lato"}} className="col-3 quiz-detail-content-title align-self-center">{quiz.name}</h2>
            </div>
            <div className="row p-2">
              <label className="col-3 quiz-detail-content-title align-self-center">Quiz Type</label>
              <input disabled type="text" value="Graded Quiz" className="col-3 form-control quiz-detail-content-form"  />
            </div>

            <div className="row p-2">
              <label className="col-3 quiz-detail-content-title align-self-center">Points</label>
              <input disabled type="number" value={quiz.points} className="col-3 form-control quiz-detail-content-form"  />
            </div>

            <div className="row p-2">
              <label className="col-3 quiz-detail-content-title align-self-center">Assignment Group</label>
              <input disabled type="Text" value="Quizzes" className="col-3 form-control quiz-detail-content-form"  />
            </div>

            <div className="row p-2">
              <label className="col-3 quiz-detail-content-title align-self-center">Shuffle Answers</label>
              <input disabled type="text" value={quiz.shuffleAnswers ? "Yes" : "No"} className="col-3 form-control quiz-detail-content-form"  />
            </div>

            <div className="row p-2">
              <label className="col-3 quiz-detail-content-title align-self-center">Time Limit</label>
              <input disabled type="text" value={quiz.timeLimit + " Minutes"} className="col-3 form-control quiz-detail-content-form"  />
            </div>

            <div className="row p-2">
              <label className="col-3 quiz-detail-content-title align-self-center">Multiple Attempts</label>
              <input disabled type="text" value={quiz.multipleAttempts ? "Yes" : "No"} className="col-3 form-control quiz-detail-content-form"  />
            </div>

            
            <div className="row p-2">
              <label className="col-3 quiz-detail-content-title align-self-center">View Responses</label>
              <input disabled type="text" value="Always" className="col-3 form-control quiz-detail-content-form"  />
            </div>

            <div className="row p-2">
              <label className="col-3 quiz-detail-content-title align-self-center">Show Correct Answers</label>
              <input disabled type="text" value="Immediately" className="col-3 form-control quiz-detail-content-form"  />
            </div>

            <div className="row p-2">
              <label className="col-3 quiz-detail-content-title align-self-center">One Question at a Time</label>
              <input disabled type="Text" value="Yes" className="col-3 form-control quiz-detail-content-form"  />
            </div>

            <div className="row p-2">
              <label className="col-3 quiz-detail-content-title align-self-center">Requires Lockdown Browser</label>
              <input disabled type="text" value="No" className="col-3 form-control quiz-detail-content-form"  />
            </div>

            <div className="row p-2">
              <label className="col-3 quiz-detail-content-title align-self-center">Required to View Results</label>
              <input disabled type="text" value="No" className="col-3 form-control quiz-detail-content-form"  />
            </div>

            <div className="row p-2">
              <label className="col-3 quiz-detail-content-title align-self-center">Webcam Required</label>
              <input disabled type="text" value="No" className="col-3 form-control quiz-detail-content-form"  />
            </div>

            <div className="row p-2">
              <label className="col-3 quiz-detail-content-title align-self-center">Lock Questions after Answering</label>
              <input disabled type="text" value="No" className="col-3 form-control quiz-detail-content-form"  />
            </div>

          </div>
          <div className="details-table">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Due</th>
                <th>For</th>
                <th>Available from</th>
                <th>Until</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{moment(quiz.dueDate.toString()).utc().format('DD MMM, YYYY hh:mm A')}</td>
                <td>Everyone</td>
                <td>{moment(quiz.availableFrom.toString()).utc().format('DD MMM, YYYY hh:mm A')}</td>
                <td>{moment(quiz.availableUntil.toString()).utc().format('DD MMM, YYYY hh:mm A')}</td>
              </tr>
            </tbody>
          </table>
          </div>
          <div style={{display : "flex", justifyContent : "space-between"}}>
          <Link to={`/Kanbas/Courses/${courseId}/Quizzes`} className="btn btn-light assignment-button">Back
          </Link>
          <button className="btn btn-danger assignment-button">Preview
          </button>
          </div>
          
        </form>
    </div>
  );
}

export default QuizDetails;