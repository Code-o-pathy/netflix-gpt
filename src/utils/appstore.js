import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import moviereducer from "./movieSlice";
import gptSlice from "./gptSlice";

const appstore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviereducer,
    gpt:gptSlice
  },
});
export default appstore;
