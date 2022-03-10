import { createSlice } from '@reduxjs/toolkit';

export const setOriginDestSlice = createSlice({
    name: 'origindest',
    initialState: {
      coordsO: null,
      coordsD: null
    },
    
    reducers: {
        setOriginReducer: (state, action) => {
        state.coordsO = action.payload
      },
        setDestReducer: (state, action) => {
        state.coordsD = action.payload
      }
    }
  })
  
  export const { setOriginReducer, setDestReducer } = setOriginDestSlice.actions

  export const coordsO = state => state.origindest.coordsO;
  export const coordsD = state => state.origindest.coordsD;
  
  export default setOriginDestSlice.reducer