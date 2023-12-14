import React, { useState } from 'react';
import "./quizquestionseditor"
import { FaPlus} from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { setQuestions  } from '../quizReducer';

const MultipleChoiceQuestion = ({quizQuestion}) => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  var correctAnswer = quizQuestion.correctAnswers == null ? "" : quizQuestion.correctAnswers[0];
  const [question, setQuestion] = useState(quizQuestion);
  const [answers, setAnswers] = useState(quizQuestion.possibleAnswers);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(quizQuestion.possibleAnswers ? quizQuestion.possibleAnswers.indexOf(correctAnswer) : -1);

  const questions = useSelector((state) => state.quizReducer.questions);


  const handleAddAnswer = (e) => {
    const newAnswers = [...answers, e.target.value];
    setAnswers(newAnswers);
    var updatedQuestions = questions.map(({possibleAnswers, ...question}) => ({
      ...question,
      possibleAnswers: question._id === e.target.id ? newAnswers : possibleAnswers
     
    }));
    dispatch(setQuestions(updatedQuestions));
    
  };

  const handleRemoveAnswer = (e, index) => {
    
    const newAnswers = [...answers];
    newAnswers.splice(index, 1);
    setAnswers(newAnswers);

    var updatedQuestions = questions.map(({possibleAnswers, ...question}) => ({
      ...question,
      possibleAnswers: question._id === e.target.id ? newAnswers : possibleAnswers
     
    }));

    var updatedQuestion = updatedQuestions.filter(question => question._id === e.target.id)[0];
    dispatch(setQuestions(updatedQuestions));
    //setQuestion(updatedQuestion);
    setAnswers(updatedQuestion.possibleAnswers)
    if (correctAnswerIndex === index) {
      setCorrectAnswerIndex(null);
    } else if (correctAnswerIndex > index) {
      setCorrectAnswerIndex(correctAnswerIndex - 1);
    }
  };

  const handleSelectCorrectAnswer = (e, index) => {
    setCorrectAnswerIndex(index);
    var updatedQuestions = questions.map(({correctAnswers, ...question}) => ({
      ...question,
      correctAnswers: question._id === e.target.id ? [question.possibleAnswers[index]] : correctAnswers,
    }));
    dispatch(setQuestions(updatedQuestions));
  };

  const handleQuestionTextChange = (e) => {
    
    var existingQuestions = questions.filter(q => q._id === e.target.id);
    var updatedQuestions = [];
    if(existingQuestions.length === 0){
      updatedQuestions = [...questions, {questionText : e.target.value, _id :e.target.id, questionType: "mcq" }]
    }
    else {
    //questions.map(question => question._id === e.target.id ? "questionText" :e.target.value);
      updatedQuestions = questions.map(({questionText, ...question}) => ({
        ...question,
        questionText: question._id === e.target.id ? e.target.value : questionText,
      }));
      
    }
    var updatedQuestion = updatedQuestions.filter(q => q._id === e.target.id)[0];
    dispatch(setQuestions(updatedQuestions));
    setQuestion(updatedQuestion);

  }

  const handleAnswerTextChange = (e, index) => {
    var existingQuestions = questions.filter(q => q._id === e.target.id);
    var updatedQuestions =[];
    if(existingQuestions.length === 0){
      updatedQuestions = [...questions, {possibleAnswers : [e.target.value], _id :e.target.id, questionType: "mcq" }]
    }
    else {
      updatedQuestions = questions.map(({possibleAnswers, ...question}) => ({
        ...question,
        possibleAnswers: question._id === e.target.id ? getUpdatedAnswers(possibleAnswers, index, e.target.value) : possibleAnswers
     
      }));
    }
    var updatedQuestion = updatedQuestions.filter(question => question._id === e.target.id)[0];
    dispatch(setQuestions(updatedQuestions));
    setAnswers(updatedQuestion.possibleAnswers)
  }

  function getUpdatedAnswers(possibleAnswers, index, newValue){
    var updatedStrings;
    if(possibleAnswers && possibleAnswers[index].length > 0) {
      updatedStrings = (possibleAnswers || []).map((answer, i) => {
        return i === index ? newValue : answer
      })
    }
    else{
      if(possibleAnswers) updatedStrings = [...possibleAnswers, newValue]
      else updatedStrings = [ newValue];
    }
    return updatedStrings.filter(str => str && str.length > 0);
  }

  
  
  return (
    <div className='mcq-editor'>
      <form>
        <div className='padding'>
          <label className="xsmall-font">Enter your question and multiple answers, then select the one correct answer</label>
        </div>
        <div className='padding'>
          <label className="xsmall-font bold col-3">Question : </label>
          <textarea id={question._id} className='form-control col-12' type="textarea" 
          value={question?.questionText} 
          onChange={handleQuestionTextChange} />

        </div>
        <div className='padding'>
          <label className="xsmall-font bold col-3">Answers : </label>
        </div>
        <div className='form_answers padding'>
        {(answers || []).map((answer, index) => (
          <div className='padding header' key={index}>
            <div className='half-width col-3'>
              <input
              id={question._id}
              type="radio"
              name="correctAnswer"
              checked={correctAnswerIndex === index}
              onChange={(e) => handleSelectCorrectAnswer(e, index)}
              />
              <label className='padding' style={{color : (correctAnswerIndex === index ? "green" : "black")}}>{correctAnswerIndex === index ? "Correct Answer" : "Possible Answer"}</label>
            </div>
            <div className='col-9' style={{display: "flex"}}>
              <input
              id={question._id}
              type="text"
              className='form-control half-width'
              value={answer}
              onChange={(e) => handleAnswerTextChange(e, index)}
              />
              <button id={question._id} className='form-control btn btn-danger padding half-width' style={{ marginLeft: 'auto'}} onClick={(e) => handleRemoveAnswer(e,index)}>
              Remove
              </button>
            </div>
          </div>
        
      ))}
        <div className='padding footer'>
          <button id={question._id} className='form-control padding btn btn-light col-9 half-width' style={{float: "inline-end", color: "#b52828"}} onClick={(e) => handleAddAnswer(e)}>
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
