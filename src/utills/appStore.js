import { configureStore } from '@reduxjs/toolkit'
import  userReducer  from "../utills/userSlice"

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
})

export default appStore;