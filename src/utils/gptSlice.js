import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        language:"en",
        movieNames:null,
        suggestedMovies:null
    },
    reducers:{
        toggleSearchView:(state,action)=>{
            (state.showGptSearch)=!(state.showGptSearch);
        },
        toggleLanguage:(state,action)=>{
            state.language=action.payload;
        },
        addSuggestedMovies:(state,action)=>{
            const {movieNames,suggestedMovies}=action.payload;
            state.suggestedMovies=suggestedMovies;
            state.movieNames=movieNames;
        }
    }
})

export default gptSlice.reducer;
export const {toggleSearchView,toggleLanguage,addSuggestedMovies}=gptSlice.actions;