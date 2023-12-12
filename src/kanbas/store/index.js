import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../courses/modules/modulesReducer";
import assignmentsReducer from "../courses/assignments/assignmentsReducer";
import quizReducer from "../courses/quiz/quizReducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer,
    quizReducer,
  }
});


export default store;