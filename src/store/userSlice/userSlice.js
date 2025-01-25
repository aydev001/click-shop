import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";
import axios from "axios";

const initialState = {
    users: [],
    userProfile: null,
    loading: false,
    error: null
}

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
    const responce = await axiosInstance.get("/users/get")
    return responce.data
})

export const fetchUserProfile = createAsyncThunk("fetchUserProfile", async () => {
    const token = localStorage.getItem("authToken")
    if (token) {
        const baseUrl = process.env.VITE_BASE_URL
        const responce = await axios.get(`${baseUrl}/users/get-one`, {
            headers:
            {
                Authorization: `Bearer ${token}`
            }
        })
        return responce.data
    } else {
        return null
    }
})

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        }).addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false,
                state.users = action.payload
        }).addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        builder.addCase(fetchUserProfile.pending, (state) => {
            state.loading = true
        }).addCase(fetchUserProfile.fulfilled, (state, action) => {
            state.loading = false,
            state.userProfile = action.payload
        }).addCase(fetchUserProfile.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default userSlice