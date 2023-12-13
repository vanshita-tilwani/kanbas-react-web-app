import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { FaPlus, FaSearch} from "react-icons/fa";
import "./quizquestionseditor.css";
import MultipleChoiceQuestion from "./multiplechoicequestion";

function QuizQuestionEditor() {
  
    const [renderExtraComponents, setRenderExtraComponents] = useState(false);
    const [selectedComponent, setSelectedComponent] = useState(null);

    const renderSelectedComponent = () => {
      switch (selectedComponent) {
        case 'mcq':
          return <MultipleChoiceQuestion/>;
        case 'truefalse':
          return <h1>Hii</h1>;
        case 'fillintheblank':
          return <h1>Bye</h1>;;
        default:
          return <MultipleChoiceQuestion/>;
      }
    };
    const handleDropdownChange = (event) => {
      // Set the selected component based on the dropdown value
      setSelectedComponent(event.target.value);
    };
    const handleButtonClick = () => {
      // Toggle the state to show/hide extra components
      setRenderExtraComponents(!renderExtraComponents);
    };
    const { courseId } = useParams();

    return (
    <div className="quiz-details-editor">
      <div>
        {renderExtraComponents && (<div>
          <div className='question-editor'>
            <div className='padding header'>
              <input type="text" className="half-width form-control col-3" placeholder='Question' 
              onChange={(e) => {}}
              />
              <select className='half-width form-control col-6' defaultValue="mcq"
              onChange={handleDropdownChange}>
              <option value="mcq">Multiple Choice Question</option>
              <option value="truefalse">True/False</option>
              <option value="fillintheblank">Fill in the Blank</option>
              </select>

            </div>
            {renderSelectedComponent()}
          </div>
        </div>)}
        <div className="container">
          <div className="p-2" style={{display : "flex"}}>
            <button onClick={handleButtonClick} className="btn btn-light col-3 float-end quiz-question-button save-button">
            <FaPlus style={{color  : "grey"}}/>
            New Question
            </button>
                
            <button className="btn btn-light col-3 float-end quiz-question-button save-button">
            <FaPlus style={{color  : "grey"}}/>
            New Question Group
            </button>
                
            <button className="btn btn-light col-3 float-end quiz-question-button save-button">
            <FaSearch style ={{color  : "grey"}}/>
            Find Question
            </button>

          </div>
          <hr />
          <div className="row">
              <div className="col-6 align-self-center">
                <input type="checkbox" id="notify-user-content-changed" className="checkbox-margin-right" />
                <label htmlFor="notify-user-content-changed">Notify users this quiz has
                  changed</label>
              </div>
              <div className="col-6 align-self-center">
                <button className="btn btn-danger float-end quiz-question-button save-button">
                  Save
                </button>
                <button className="btn btn-light quiz-question-button float-end">
                  Save & Publish
                </button>
                <Link to={`/Kanbas/Courses/${courseId}/Quizzes`} className="btn btn-light quiz-question-button float-end">
                  Cancel
                </Link>
              </div>
            </div>
            <hr />
          </div>
        
      </div>
    </div>
    
  );
}

export default QuizQuestionEditor;