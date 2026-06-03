import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./reducers/pageSlice.js";


const store = configureStore({
  reducer: {
    page: pageSlice,
  },
});

export default store;