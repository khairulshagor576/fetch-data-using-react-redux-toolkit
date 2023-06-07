import { configureStore } from "@reduxjs/toolkit";
import PostsReducer from "../features/Posts/PostsSlice";

const store = configureStore({
    reducer:{
        posts:PostsReducer
    }
});

export default store;