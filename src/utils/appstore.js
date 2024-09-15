import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import moviereducer from "./movieSlice";

const appstore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviereducer,
  },
});
export default appstore;
