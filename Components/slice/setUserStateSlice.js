import { createSlice } from '@reduxjs/toolkit';

export const setUserStateSlice = createSlice({
    name: 'user',
    initialState: {
      status: true,
      user: {},
    },
    reducers: {
        setStatusReducer: (state, action) => {
        state.status = action.payload;
      },
        setUserReducer: (state, action) => {
            state.user = action.payload;
        }
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { setStatusReducer, setUserReducer } = setUserStateSlice.actions
  
  export default setUserStateSlice.reducer