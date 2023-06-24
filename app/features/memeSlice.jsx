import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    topText: '',
    bottomText: '',
    isUpperCase: false,
    fontColor: 'black',
    hasShadow: false,
    fontSize: 16,
    selectedFont: 'Arial',
  };
  
  const memeSlice = createSlice ( {
    name: "meme",
    initialState,
    reducers:{
        updateMeme(state, action){
            return {
                ...state,
                ...action.payload,
            }
        },
        resetMeme(state) {
            return initialState;
        },

    },
  })

  export const { updateMeme, resetMeme} = memeSlice.actions

  export default memeSlice.reducer
