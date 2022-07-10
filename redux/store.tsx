import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/redux";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
