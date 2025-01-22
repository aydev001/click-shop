import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice/categorySlice";
import productSlice from "./productSlice/productSlice";
import userSlice from "./userSlice/userSlice";
import actionSlice from "./actionSlice/actionSlice";

export const store = configureStore({
    reducer : {
        categories : categorySlice.reducer,
        products : productSlice.reducer,
        users : userSlice.reducer,
        actions : actionSlice.reducer
    }
})