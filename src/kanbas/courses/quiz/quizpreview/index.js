import "./index.css";
import React, { useState,  useEffect } from "react"
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as service from "../client";
import { setQuestions } from "../quizReducer";

function QuizPreview() {

  const { quizId } = useParams();
  useEffect(() => {
    service.findQuestionsForQuiz(quizId)
      .then((questions) => {
        dispatch(setQuestions(questions));
        setCurrentIndex(0);

      }
    );
    // eslint-disable-next-line 
  }, []);
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.quizReducer.quiz);
  const questions = useSelector((state) => state.quizReducer.questions);
  
  const [currentIndex, setCurrentIndex] = useState(-1);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === questions.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? questions.length - 1 : prevIndex - 1));
  };

  const handleItemClick = (index) => (e) => {
    e.preventDefault();
    setCurrentIndex(index);
  };
  return (
    <div className="preview">
      <hr />
      <div className="">
        <h3>{quiz.name}</h3>
      </div>
      <div className="warning">
        <i className="icon-warning">
        This is a preview of the published version of the quiz
        </i>
      </div>
      <div className="">
        <h4>Quiz Instructions</h4>
        <label>{quiz.description}</label>
      </div>
      <hr />
      <div>
      <div style={{ display: 'flex' }}>
        {currentIndex != -1 && (
          <div style={{ flex: 1 }}>
          <div className="question_holder">
            <div className="question">
              <div className="header">
                <span className="name question_name">{questions[currentIndex].title}</span>
                <span className="question_points_holder">
                  <span class="points question_points">{questions[currentIndex].points}</span>
                  pts
                </span>
              </div>
              <div className="text">
                <div className="question_text user_content">
                  <p>{questions[currentIndex].questionText}</p>
                </div>
              </div>
  
              <div className="answers">
                { questions && questions.length > 0 && questions[currentIndex].questionType === "mcq"
                 && (
                  <div>
                    {questions[currentIndex].possibleAnswers.map((answer) => (
                      <div className="padding-between-answer">
                        <input
                        type="radio"
                        name="correctAnswer"
                        className=""
                      />
                      <label className='padding'>{answer}</label>
                    </div>
                    ))}
                  </div>
                )}

{ questions && questions.length > 0 && questions[currentIndex].questionType === "truefalse"
                 && (
                  <div>
                    {['True', 'False'].map((answer) => (
                      <div className="padding-between-answer">
                        <input
                        type="radio"
                        name="correctAnswer"
                        className=""
                      />
                      <label className='padding'>{answer}</label>
                    </div>
                    ))}
                  </div>
                )}

{ questions && questions.length > 0 && questions[currentIndex].questionType === "fillintheblank"
                 && (
                  
                  <div>
                    <div className="padding-between-answer" style={{width : "55% !important"}}>
                        <input
                        type="text"
                        className="form-control"
                        name="correctAnswer"
                        
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="previous-next-buttons padding-between-answer" style={{display: "flex"}}>
                <button className="form-control" onClick={handlePrevious}>Previous</button>
        <button className="form-control" onClick={handleNext}>Next</button>
                </div>
            </div>
          </div>
          
        </div>
        )}
      
      <div style={{ width: '200px', padding: '10px' }}>
        <h3>Questions</h3>
        <ul>
          {questions.map((question, index) => (
            <li key={index}>
              <a href="javascript.void()" onClick={handleItemClick(index)}>
                {"Question " + (index+1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
    </div>
  );
}

export default QuizPreview;