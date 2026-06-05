import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./reducers/pageSlice.js";
import userSlice from "./reducers/user.js";


const store = configureStore({
  reducer: {
    page: pageSlice,
    user: userSlice.reducer
  },

  middleware: (middlewares)=>middlewares().concat(userSlice.middleware)
});

export default store;