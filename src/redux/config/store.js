import { configureStore ,getDefaultMiddleware } from "@reduxjs/toolkit";
import movies from "../modules/movies";
import user from "../modules/user";

const store = configureStore({
  reducer: {
    movies,
    user},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
    }),

});

export default store;
