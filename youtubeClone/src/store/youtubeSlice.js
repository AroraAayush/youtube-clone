import { createSlice } from "@reduxjs/toolkit"
import { sideBarItems } from "../utils/constants";

const initialState={
    category:sideBarItems[0],
    searched:"",
    filteredContent:[]
}


const youtubeSlice=createSlice({
    name:"youtubeSlice",
    initialState,
    reducers:{
        changeCategoryStore:(state,action)=>{
            state.category=action.payload;
        },
        changeSearched:(state,action)=>{
            state.searched=action.payload;
        },
        changeFilteredContent:(state,action)=>{
            state.filteredContent=action.payload;
        },
        
    }
})

export const {changeCategoryStore,changeFilteredContent,changeSearched} =youtubeSlice.actions;

export default youtubeSlice.reducer;