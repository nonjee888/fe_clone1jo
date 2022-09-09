import { configureStore } from "@reduxjs/toolkit";
import movies from "../modules/movies";
import user from "../modules/user";

const store = configureStore({
  reducer: {
    movies,
    user},
});

export default store;
