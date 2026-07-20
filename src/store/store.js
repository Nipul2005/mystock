import { configureStore } from "@reduxjs/toolkit";
import userApi from "./reducers/user.js";
import logged from "./reducers/auth.js";
import consumerApi from "./reducers/consumer.js";

const store = configureStore({
  reducer: {
    user: userApi.reducer,
    auth: logged,
    consumer: consumerApi.reducer,
  },

  middleware: (middlewares) =>
    middlewares().concat([userApi.middleware, consumerApi.middleware]),
});

export default store;
