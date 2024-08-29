import { createSlice } from "@reduxjs/toolkit"
import { sideBarItems } from "../utils/constants";


const online=navigator.onLine;
const initialState={
    category:sideBarItems[0],
    searched:"",
    filteredContent:[],
    status:online
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
        changeStatus:(state,action)=>{
            state.status=action.payload
        }
        
    }
})

export const {changeCategoryStore,changeFilteredContent,changeSearched,changeStatus} =youtubeSlice.actions;

export default youtubeSlice.reducer;