import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./reducers/pageSlice.js";
import userSlice from "./reducers/user.js";
import logged from "./reducers/auth.js";

const store = configureStore({
  reducer: {
    page: pageSlice,
    user: userSlice.reducer,
    auth: logged,
  },

  middleware: (middlewares) => middlewares().concat(userSlice.middleware),
});

export default store;
