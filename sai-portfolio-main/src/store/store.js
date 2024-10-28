import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../slices/themeSlice";
import blogsReducer from "../slices/blogsSlice";
const store = configureStore({
    reducer: {
        theme: themeReducer,
        blogs: blogsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true,
})

export default store