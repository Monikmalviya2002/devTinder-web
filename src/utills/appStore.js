import { configureStore } from '@reduxjs/toolkit'
import  userReducer  from "../utills/userSlice"
import feedReducer from "../utills/feedSlice"; 
import ConnectionReducer from './connectionSlice';


const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed : feedReducer,
    connection: ConnectionReducer,
  },
})

export default appStore;