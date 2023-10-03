import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from "../pages/Serials/filmSlice";

export const store = configureStore({
  reducer: {
    films: filmsReducer,
  },
});
