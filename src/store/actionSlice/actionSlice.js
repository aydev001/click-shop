import { createSlice } from "@reduxjs/toolkit";

console.log(JSON.parse(localStorage.getItem("favourite")))

const initialState = {
    isModalAlert : false,
    selectCategoryId : null,
    favourite : JSON.parse(localStorage.getItem("favourite")) || [],
    basket : []
}
const actionSlice = createSlice({
    name : "actions",
    initialState,
    reducers : {
        setSelectCategory : (state, action) =>{
            state.selectCategoryId = action.payload
        },
        setFavourite : (state, action) => {
            if(state.favourite.find(item => item.id === action.payload.id)) {
                const favouriteItems = state.favourite.filter(item => item.id !== action.payload.id)
                state.favourite = favouriteItems
                localStorage.setItem("favourite", JSON.stringify(favouriteItems))
            }else {
                const favouriteItems = [...state.favourite, action.payload]
                state.favourite = favouriteItems
                localStorage.setItem("favourite", JSON.stringify(favouriteItems))
            }
        }
    },
})

export const {setSelectCategory, setFavourite} = actionSlice.actions

export default actionSlice