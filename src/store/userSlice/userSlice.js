import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

const initialState = {
    users : [],
    loading: false,
    error : null
}

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
    const responce = await axiosInstance.get("/users/get")
    return responce.data
})

const userSlice = createSlice({
    name : "users",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        }).addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false,
            state.categories = action.payload
        }).addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default userSlice