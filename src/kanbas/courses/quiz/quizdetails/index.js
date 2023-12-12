
import "./index.css";
import { Link , useParams} from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { FaCheckCircle} from "react-icons/fa";

function QuizDetails() {
  const { courseId } = useParams();
  const {quizId} = useParams()
  return (
    <div className="assignment">
      <div className="d-flex justify-content-between">
        <h3 style={{font : "18px Lato",alignSelf: "center"}} className=" w-25">Quiz Details</h3>
        <div className="assignment-buttons">
          
          <button className="btn btn-danger assignment-button">
            <FaCheckCircle className="icon-margin" />
            Published
          </button>
          <button className="btn btn-light courses-home-module-button float-end">
            
            Preview
          </button>
          
          <Link to={`/Kanbas/Courses/${courseId}/Quizzes/Edit/${quizId}`} className="btn btn-light courses-home-module-button float-end">
            <CiEdit/>
                  Edit
                </Link>
        </div>
      </div>
      
      <hr />
      <form>
          <div className="container">
            <div className="row p-2">
              <label className="col-3 assignment-edit-content-title align-self-center">Quiz Type</label>
              <input disabled type="text" value="Graded Quiz" className="col-3 form-control assignment-edit-content-form"  />
            </div>

            <div className="row p-2">
              <label className="col-3 assignment-edit-content-title align-self-center">Points</label>
              <input disabled type="number" value={29} className="col-3 form-control assignment-edit-content-form"  />
            </div>

            <div className="row p-2">
              <label className="col-3 assignment-edit-content-title align-self-center">Assignment Group</label>
              <input disabled type="Text" value="Quizzes" className="col-3 form-control assignment-edit-content-form"  />
            </div>

            <div className="row p-2">
              <label className="col-3 assignment-edit-content-title align-self-center">Shuffle Answers</label>
              <input disabled type="text" value="No" className="col-3 form-control assignment-edit-content-form"  />
            </div>

            <div className="row p-2">
              <label className="col-3 assignment-edit-content-title align-self-center">Time Limit</label>
              <input disabled type="text" value="30 Minutes" className="col-3 form-control assignment-edit-content-form"  />
            </div>

            <div className="row p-2">
              <label className="col-3 assignment-edit-content-title align-self-center">Multiple Attempts</label>
              <input disabled type="text" value="No" className="col-3 form-control assignment-edit-content-form"  />
            </div>

            
            <div className="row p-2">
              <label className="col-3 assignment-edit-content-title align-self-center">View Responses</label>
              <input disabled type="text" value="Always" className="col-3 form-control assignment-edit-content-form"  />
            </div>

            <div className="row p-2">
              <label className="col-3 assignment-edit-content-title align-self-center">Show Correct Answers</label>
              <input disabled type="text" value="Immediately" className="col-3 form-control assignment-edit-content-form"  />
            </div>

            <div className="row p-2">
              <label className="col-3 assignment-edit-content-title align-self-center">One Question at a Time</label>
              <input disabled type="Text" value="Yes" className="col-3 form-control assignment-edit-content-form"  />
            </div>

            <div className="row p-2">
              <label className="col-3 assignment-edit-content-title align-self-center">Requires Lockdown Browser</label>
              <input disabled type="text" value="No" className="col-3 form-control assignment-edit-content-form"  />
            </div>

            <div className="row p-2">
              <label className="col-3 assignment-edit-content-title align-self-center">Required to View Results</label>
              <input disabled type="text" value="No" className="col-3 form-control assignment-edit-content-form"  />
            </div>

            <div className="row p-2">
              <label className="col-3 assignment-edit-content-title align-self-center">Webcam Required</label>
              <input disabled type="text" value="No" className="col-3 form-control assignment-edit-content-form"  />
            </div>

            <div className="row p-2">
              <label className="col-3 assignment-edit-content-title align-self-center">Lock Questions after Answering</label>
              <input disabled type="text" value="No" className="col-3 form-control assignment-edit-content-form"  />
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
            <td>Sept 21 at 1 pm</td>
            <td>Everyone</td>
            <td>Sept 21 at 11:40 am</td>
            <td>Sept 21 at 1 pm</td>
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