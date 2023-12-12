
import "./index.css";
import { FaPlus} from "react-icons/fa";

function QuizDetails() {
  return (
    <div className="assignment">
      <div className="d-flex justify-content-between">
        <h3 style={{font : "18px Lato",alignSelf: "center"}} className=" w-25">Quiz Details</h3>
        <div className="assignment-buttons">
          
          <button className="btn btn-danger assignment-button">
            <FaPlus className="icon-margin" />
            Published
          </button>
          <button className="btn btn-danger assignment-button">
            <FaPlus className="icon-margin" />
            Preview
          </button>
          <button className="btn btn-danger assignment-button">
            <FaPlus className="icon-margin" />
            Edit
          </button>
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