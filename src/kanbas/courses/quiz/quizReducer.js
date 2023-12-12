import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizzes: [],
  quiz: { title: "New Quiz 123", description: "New Quiz Description" },
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