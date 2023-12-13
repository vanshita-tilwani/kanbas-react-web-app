import React, { useState } from 'react';
import "./quizquestionseditor"
import { FaPlus} from "react-icons/fa";

const MultipleChoiceQuestion = ({quizQuestion}) => {
  // eslint-disable-next-line
  var correctAnswer = quizQuestion.correctAnswers == null ? "" : quizQuestion.correctAnswers[0];
  const [question, setQuestion] = useState(quizQuestion);
  const [answers, setAnswers] = useState(quizQuestion.possibleAnswers);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(quizQuestion.possibleAnswers.indexOf(correctAnswer));

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleAnswerChange = (e, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleAddAnswer = () => {
    setAnswers([...answers, '']);
  };

  const handleRemoveAnswer = (index) => {
    const newAnswers = [...answers];
    newAnswers.splice(index, 1);
    setAnswers(newAnswers);

    if (correctAnswerIndex === index) {
      setCorrectAnswerIndex(null);
    } else if (correctAnswerIndex > index) {
      setCorrectAnswerIndex(correctAnswerIndex - 1);
    }
  };

  const handleSelectCorrectAnswer = (index) => {
    setCorrectAnswerIndex(index);
  };

  
  return (
    <div className='mcq-editor'>
      <form>
        <div className='padding'>
          <label className="xsmall-font">Enter your question and multiple answers, then select the one correct answer</label>
        </div>
        <div className='padding'>
          <label className="xsmall-font bold col-3">Question : </label>
          <textarea className='form-control col-12' type="textarea" value={question?.questionText} onChange={handleQuestionChange} />

        </div>
        <div className='padding'>
          <label className="xsmall-font bold col-3">Answers : </label>
        </div>
        <div className='form_answers padding'>
        {answers.map((answer, index) => (
          <div className='padding header' key={index}>
            <div className='half-width col-3'>
              <input
              type="radio"
              name="correctAnswer"
              checked={correctAnswerIndex === index}
              onChange={() => handleSelectCorrectAnswer(index)}
              />
              <label className='padding' style={{color : (correctAnswerIndex === index ? "green" : "black")}}>{correctAnswerIndex === index ? "Correct Answer" : "Possible Answer"}</label>
            </div>
            <div className='col-9' style={{display: "flex"}}>
              <input
              type="text"
              className='form-control half-width'
              value={answer}
              onChange={(e) => handleAnswerChange(e, index)}
              />
              <button className='form-control btn btn-danger padding half-width' style={{ marginLeft: 'auto'}} onClick={() => handleRemoveAnswer(index)}>
              Remove
              </button>
            </div>
          </div>
        
      ))}
        <div className='padding footer'>
          <button className='form-control padding btn btn-light col-9 half-width' style={{float: "inline-end", color: "#b52828"}} onClick={handleAddAnswer}>
          <FaPlus style={{color  : "#b52828"}}/>
            Add Answer
          </button>
        </div>
          
        </div>
        
      
      
      </form>
      
    </div>
  );
};

export default MultipleChoiceQuestion;
