import React, { useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import * as client from "../client";
import { Link } from "react-router-dom";
import { FaPlus, FaSearch} from "react-icons/fa";
import "./quizquestionseditor.css";
import MultipleChoiceQuestion from "./multiplechoicequestion";
import TrueFalseQuestion from "./truefalsequestion";
import FillInTheBlank from "./fillintheblankquestion";
import { useSelector, useDispatch } from "react-redux";
import { setQuestions } from '../quizReducer';

function QuizQuestionEditor() {
    const { courseId } = useParams();
    const { quizId } = useParams();
    const dispatch = useDispatch();
    
    const [dynamicComponents, setDynamicComponents] = useState([]);

    const renderSelectedComponent = (selectedComponent,question) => {
      switch (selectedComponent) {
        case 'mcq':
          return <MultipleChoiceQuestion mcqQuestion = {question}/>;
        case 'truefalse':
          return <TrueFalseQuestion trueFalseQuestion= {question}/>;
        case 'fillintheblank':
          return <FillInTheBlank fillIntheBlankQuestion = {question}/>;
        default:
          return <MultipleChoiceQuestion/>;
      }
    };

    const handleDropdownChange = (event) => {
      // Set the selected component based on the dropdown value
      setDynamicComponents([...dynamicComponents, ])
      let items = [...dynamicComponents];
      items[event.target.id] = renderSelectedComponent(event.target.value);
      
      setDynamicComponents([...items]);

      //setSelectedComponent(event.target.value);
    };

    const handleButtonClick = () => {
      // Create a new component (you can customize this part)  
      // Update the state to add the new component to the list
      setDynamicComponents([...dynamicComponents, renderSelectedComponent()]);
    };
  
    useEffect(() => {
      client.findQuestionsForQuiz(quizId)
        .then((questions) =>
          dispatch(setQuestions(questions))
      );
      // eslint-disable-next-line 
    }, [quizId]);

    
    const questions = useSelector((state) => state.quizReducer.questions);
    return (
    <div className="quiz-details-editor">
      <div>
      {dynamicComponents.map((component, index) => (
        // Make sure to assign a unique key to each component
        // The key is important for React to efficiently update the list
        <div className='question-editor'>
        <div>
            <div className='padding header'>
              <input type="text" className="half-width form-control col-3" placeholder='Question' 
              onChange={(e) => {}}
              />
              <select id={index} className='half-width form-control col-6' defaultValue="mcq"
              onChange={handleDropdownChange}>
              <option value="mcq">Multiple Choice Question</option>
              <option value="truefalse">True/False</option>
              <option value="fillintheblank">Fill in the Blank</option>
              </select>

            </div>
            
          </div>
          <div key={index}>{component}</div>
        </div>
        
      ))}
      {questions.map((question, index) => (
        // Make sure to assign a unique key to each component
        // The key is important for React to efficiently update the list
        <div className='question-editor'>
        <div>
            <div className='padding header'>
              <input value={question.title} type="text" className="half-width form-control col-3" placeholder='Question' 
              onChange={(e) => {}}
              />
              <select id={index} value={question.questionType} className='half-width form-control col-6' defaultValue="mcq"
              onChange={handleDropdownChange}>
              <option value="mcq">Multiple Choice Question</option>
              <option value="truefalse">True/False</option>
              <option value="fillintheblank">Fill in the Blank</option>
              </select>

            </div>
            
          </div>
          <div key={index}>{renderSelectedComponent(question.questionType, question)}</div>
        </div>
        
      ))}
        
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