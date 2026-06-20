import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./reducers/pageSlice.js";
import userSlice from "./reducers/user.js";
import logged from "./reducers/loggedUser.js";

const store = configureStore({
  reducer: {
    page: pageSlice,
    user: userSlice.reducer,
    loggedIn: logged,
  },

  middleware: (middlewares) => middlewares().concat(userSlice.middleware),
});

export default store;
