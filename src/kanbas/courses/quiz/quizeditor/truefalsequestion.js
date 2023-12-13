import React, { useState } from 'react';
import "./quizquestionseditor.css";

const TrueFalseQuestion = ({quizQuestion}) => {
  // eslint-disable-next-line
  const [question, setQuestion] = useState(quizQuestion);
  // eslint-disable-next-line
  const [correctAnswer, setCorrectAnswer] = useState(quizQuestion.correctAnswers[0]);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSelectCorrectAnswer = (value) => {
    setCorrectAnswer(value);
  };
  
  return (
    <div className='true-false-editor'>
      <form>
        <div className='padding'>
          <label className="xsmall-font">Enter your question text, then select if True or False is the correct answer</label>
        </div>
        <div className='padding'>
          <label className="xsmall-font bold col-3">Question : </label>
          <textarea className='form-control col-12' type="textarea" value={question.questionText} onChange={handleQuestionChange} />
        </div>
        <div className='padding'>
          <label className="xsmall-font bold col-3">Answers : </label>
        </div>
        <div className='form_answers padding'>
        <div className='padding' key="trueOption">
          <div className='half-width col-3'>
            <input
            type="radio"
            name="correctAnswer"
            value="true"
            checked={correctAnswer}
            onChange={() => handleSelectCorrectAnswer(true)}
          />
            <label className='padding' style={{color : (correctAnswer ? "green" : "black")}}>True</label>
          </div>
          <div className='half-width col-3'>
            <input
            type="radio"
            name="correctAnswer"
            value="false"
            checked={correctAnswer}
            onChange={() => handleSelectCorrectAnswer(false)}
            />
            <label className='padding' style={{color : (correctAnswer ? "green" : "black")}}>False</label>
          </div>
        </div>
        </div>
      </form>
    </div>
  );
};

export default TrueFalseQuestion;
