import { configureStore } from '@reduxjs/toolkit'
import setUserStateSlice from '../Components/slice/setUserStateSlice'
import setTaskSlice from '../Components/slice/setTaskSlice'

export default configureStore({
  reducer: {
      user: setUserStateSlice,
      tasks: setTaskSlice
  }
})