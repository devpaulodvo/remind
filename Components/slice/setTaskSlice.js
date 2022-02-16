import { createSlice } from '@reduxjs/toolkit';

export const setTaskSlice = createSlice({
    name: 'tasks',
    initialState: {
      taskData: null
    },
    reducers: {
        setTaskReducer: (state, action) => {
        state.taskData = action.payload
      }
    }
  })
  
  export const { setTaskReducer } = setTaskSlice.actions

  export const taskList = state => state.tasks.taskData;
  
  export default setTaskSlice.reducer