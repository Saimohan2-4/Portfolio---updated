import { createSlice } from "@reduxjs/toolkit";

const blogsSlice = createSlice({
    name: "blogs",
    initialState: {
        blogs: undefined,
    },
    reducers: {
        setBlogs: (state, action) => {
            state.blogs = action.payload;
        },
    },
})

export const { setBlogs,fetchBlogs } = blogsSlice.actions
export default blogsSlice.reducer