import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const POSTS_API = "https://jsonplaceholder.typicode.com/posts";
export const fetchPosts = createAsyncThunk("posts/fetchPosts",async()=>{
    const response = await axios.get(POSTS_API);
    return response.data;
});
const postsSlice = createSlice({
    name:"posts",
    initialState:{
        isLoading:false,
        error:null,
        posts:[],
    },
    extraReducers:(builder)=>
    {
        builder.addCase(fetchPosts.pending,(state)=>{
            state.isLoading=true;
        });
        builder.addCase(fetchPosts.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.posts=action.payload;
            state.error=null;
        });
        builder.addCase(fetchPosts.rejected,(state,action)=>{
            state.isLoading=false;
            state.posts=[];
            state.error=action.error.message;
        })
    }
})

export default postsSlice.reducer;