import { configureStore } from '@reduxjs/toolkit'
import setUserStateSlice from '../Components/slice/setUserStateSlice'

export default configureStore({
  reducer: {
      user: setUserStateSlice
  }
})