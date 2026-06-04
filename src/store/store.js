import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./reducers/pageSlice.js";
import authReducer from "../store/reducers/auth.js";


const store = configureStore({
  reducer: {
    page: pageSlice,
    auth: authReducer,
  },
});

export default store;