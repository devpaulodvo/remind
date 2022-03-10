import { configureStore } from '@reduxjs/toolkit'
import setUserStateSlice from '../Components/slice/setUserStateSlice'
import setTaskSlice from '../Components/slice/setTaskSlice'
import setOriginDestSlice from '../Components/slice/setOriginDest'

export default configureStore({
  reducer: {
      user: setUserStateSlice,
      tasks: setTaskSlice,
      origindest: setOriginDestSlice,
  }
})