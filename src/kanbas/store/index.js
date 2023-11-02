import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../courses/modules/modulesReducer";
import assignmentsReducer from "../courses/assignments/assignmentsReducer";


const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer
  }
});


export default store;