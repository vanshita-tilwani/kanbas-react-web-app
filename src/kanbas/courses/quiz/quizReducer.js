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
};


const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {

    setQuizzes: (state, action) => {
    state.quizzes = action.payload;
    },
    addQuiz: (state, action) => {
      state.quizzes = [action.payload, ...state.quizzes];
    },

    deleteQuiz: (state, action) => {
      state.quizzes = state.quizzes.filter(
        (quiz) => quiz._id !== action.payload
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
    setQuiz: (state, action) => {
      state.quiz = action.payload;
    },
  },
});


export const { addQuiz, deleteQuiz,
  updateQuiz, setQuiz, setQuizzes } = quizSlice.actions;
export default quizSlice.reducer;