import { configureStore } from '@reduxjs/toolkit'
import  userReducer  from "../utills/userSlice"
import feedReducer from "../utills/feedSlice"; 


const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed : feedReducer,
  },
})

export default appStore;