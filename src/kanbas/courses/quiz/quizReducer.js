import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  quizzes: [],
  quiz: { name: "New Quiz", 
          description: "New Quiz Description",
          course: "",
          published : false,
          points: 0,
          shuffleAnswers: false,
          timeLimit: 0,
          multipleAttempts:false,
          dueDate: moment().utc().format('YYYY-MM-DD'),
          availableFrom: moment().utc().format('YYYY-MM-DD'),
          availableUntil: moment().utc().format('YYYY-MM-DD'),
        },
  questions: [],
  question: {}
};


const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {

    setQuizzes: (state, action) => {
    state.quizzes = action.payload;
    },

    setQuestions: (state, action) => {
    state.questions = action.payload;
    },

    addQuiz: (state, action) => {
      state.quizzes = [action.payload, ...state.quizzes];
    },

    addQuestion: (state, action) => {
      state.questions = [action.payload, ...state.questions];
    },

    deleteQuiz: (state, action) => {
      state.quizzes = state.quizzes.filter(
        (quiz) => quiz._id !== action.payload
      );
    },

    deleteQuestion: (state, action) => {
      state.questions = state.questions.filter(
        (question) => question._id !== action.payload
      );
    },

    updateQuiz: (state, action) => {
      state.quizzes = state.quizzes.map((quiz) => {
        if (quiz._id === action.payload._id) {
          return action.payload;
        } else {
          return quiz;
        }
      });
    },

    updateQuestion: (state, action) => {
      state.questions = state.questions.map((question) => {
        if (question._id === action.payload._id) {
          return action.payload;
        } else {
          return question;
        }
      });
    },

    setQuiz: (state, action) => {
      state.quiz = action.payload;
    },

    setQuestion: (state, action) => {
      state.question = action.payload;
    },
  },
});


export const { addQuiz, deleteQuiz,
  updateQuiz, setQuiz, setQuizzes, 
  addQuestion, deleteQuestion,
  updateQuestion, setQuestion, setQuestions } = quizSlice.actions;
export default quizSlice.reducer;