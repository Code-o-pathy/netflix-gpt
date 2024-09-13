import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice"

const appstore=configureStore({
    reducer:{
        user:userReducer
    }
})
export default appstore;