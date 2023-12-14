import React, { useState } from 'react';
import "./quizquestionseditor.css";
import { useDispatch, useSelector } from 'react-redux';
import { setQuestions  } from '../quizReducer';

const TrueFalseQuestion = ({quizQuestion}) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [question, setQuestion] = useState(quizQuestion);
  // eslint-disable-next-line
  const [correctAnswer, setCorrectAnswer] = useState(quizQuestion.correctAnswers[0]);
  const questions = useSelector((state) => state.quizReducer.questions);

  const handleQuestionTextChange = (e) => {
    var existingQuestions = questions.filter(q => q._id === e.target.id);
    var updatedQuestions = [];
    if(existingQuestions.length === 0){
      updatedQuestions = [...questions, 
        {questionText : e.target.value, _id :e.target.id, questionType: "truefalse" }]
    }
    else {
    //questions.map(question => question._id === e.target.id ? "questionText" :e.target.value);
      updatedQuestions = questions.map(({questionText, questionType, ...question}) => ({
        ...question,
        questionText: question._id === e.target.id ? e.target.value : questionText,
        questionType: question._id === e.target.id ? "truefalse" : questionType,
      }));
      
    }
    var updatedQuestion = updatedQuestions.filter(q => q._id === e.target.id)[0];
    dispatch(setQuestions(updatedQuestions));  
    setQuestion(updatedQuestion);
  };
    

  const handleSelectCorrectAnswer = (e, value) => {
    setCorrectAnswer(value + '');
    var updatedQuestions = questions.map(({correctAnswers, ...question}) => ({
      ...question,
      correctAnswers: question._id === e.target.id ? [value + ''] : correctAnswers,
    }));
    dispatch(setQuestions(updatedQuestions));
  };
  
  return (
    <div className='true-false-editor'>
      <form>
        <div className='padding'>
          <label className="xsmall-font">Enter your question text, then select if True or False is the correct answer</label>
        </div>
        <div className='padding'>
          <label className="xsmall-font bold col-3">Question : </label>
          <textarea id={question._id} className='form-control col-12' type="textarea" value={question.questionText} onChange={handleQuestionTextChange} />
        </div>
        <div className='padding'>
          <label className="xsmall-font bold col-3">Answers : </label>
        </div>
        <div className='form_answers padding'>
        <div className='padding' key="trueOption">
          <div className='half-width col-3'>
            <input
            id={question._id}
            type="radio"
            name="correctAnswer"
            value="true"
            checked={correctAnswer  === 'true'}
            onChange={(e) => handleSelectCorrectAnswer(e, true)}
          />
            <label className='padding' style={{color : (( correctAnswer === 'true') ? "green" : "black")}}>True</label>
          </div>
          <div className='half-width col-3'>
            <input
            id={question._id}
            type="radio"
            name="correctAnswer"
            value="false"
            checked={correctAnswer === 'false'}
            onChange={(e) => handleSelectCorrectAnswer(e, false)}
            />
            <label className='padding' style={{color : ((correctAnswer === 'false') ? "green" : "black")}}>False</label>
          </div>
        </div>
        </div>
      </form>
    </div>
  );
};

export default TrueFalseQuestion;
