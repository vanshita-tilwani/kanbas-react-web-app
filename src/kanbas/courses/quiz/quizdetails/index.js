
import "./index.css";
import { Link , useParams} from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { FaCheckCircle, FaRegTimesCircle} from "react-icons/fa";
import { useSelector } from "react-redux";
import moment from "moment";

function QuizDetails() {
  const { courseId } = useParams();
  const {quizId} = useParams()
  
  const quizzes = useSelector((state) => state.quizReducer.quizzes);
  const exisitingQuiz = quizzes.find((quiz) => quiz._id === quizId);
  return (
    <div className="quiz-details-main">
      <div className="d-flex justify-content-between">
        <h3 style={{font : "18px Lato",alignSelf: "center"}} className=" w-25">Quiz Details</h3>
        <div className="quiz-details-buttons">
          {exisitingQuiz.published && (<button className="btn quiz-details-button" style={{backgroundColor : "green"}}>
             <FaCheckCircle className="icon-margin" style={{ color: "white"}}/>
            Published
          </button>)}
          {!exisitingQuiz.published && (<button className="btn btn-light quiz-details-button">
             <FaRegTimesCircle className="icon-margin"/>
            Publish
          </button>)}
          <button className="btn btn-light quiz-details-button float-end">
            Preview
          </button>
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
              <h2 style={{font : "35px Lato"}} className="col-3 quiz-detail-content-title align-self-center">{exisitingQuiz.name}</h2>
            </div>
            <div className="row p-2">
              <label className="col-3 quiz-detail-content-title align-self-center">Quiz Type</label>
              <input disabled type="text" value="Graded Quiz" className="col-3 form-control quiz-detail-content-form"  />
            </div>

            <div className="row p-2">
              <label className="col-3 quiz-detail-content-title align-self-center">Points</label>
              <input disabled type="number" value={exisitingQuiz.points} className="col-3 form-control quiz-detail-content-form"  />
            </div>

            <div className="row p-2">
              <label className="col-3 quiz-detail-content-title align-self-center">Assignment Group</label>
              <input disabled type="Text" value="Quizzes" className="col-3 form-control quiz-detail-content-form"  />
            </div>

            <div className="row p-2">
              <label className="col-3 quiz-detail-content-title align-self-center">Shuffle Answers</label>
              <input disabled type="text" value={exisitingQuiz.shuffleAnswers ? "Yes" : "No"} className="col-3 form-control quiz-detail-content-form"  />
            </div>

            <div className="row p-2">
              <label className="col-3 quiz-detail-content-title align-self-center">Time Limit</label>
              <input disabled type="text" value={exisitingQuiz.timeLimit + " Minutes"} className="col-3 form-control quiz-detail-content-form"  />
            </div>

            <div className="row p-2">
              <label className="col-3 quiz-detail-content-title align-self-center">Multiple Attempts</label>
              <input disabled type="text" value={exisitingQuiz.multipleAttempts ? "Yes" : "No"} className="col-3 form-control quiz-detail-content-form"  />
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
        <tr>
            <th>Due</th>
            <th>For</th>
            <th>Available from</th>
            <th>Until</th>
        </tr>
        <tr>
            <td>{moment(exisitingQuiz.dueDate.toString()).utc().format('DD MMM, YYYY hh:mm A')}</td>
            <td>Everyone</td>
            <td>{moment(exisitingQuiz.availableFrom.toString()).utc().format('DD MMM, YYYY hh:mm A')}</td>
            <td>{moment(exisitingQuiz.availableUntil.toString()).utc().format('DD MMM, YYYY hh:mm A')}</td>
        </tr>
        
    </table>
          </div>
          <div style={{display : "flex", justifyContent : "center"}}>
          <button className="btn btn-danger assignment-button">Preview
          </button>
          </div>
          
        </form>
    </div>
  );
}

export default QuizDetails;