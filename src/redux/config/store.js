import { configureStore ,getDefaultMiddleware } from "@reduxjs/toolkit";
import movies from "../modules/movies";
import user from "../modules/user";
import booking from "../modules/booking";


const store = configureStore({
  reducer: {
    movies,
    user,
  booking},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
    }),

});

export default store;
