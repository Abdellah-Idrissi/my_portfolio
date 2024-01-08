import { configureStore } from '@reduxjs/toolkit'
import navMenuReducer from "./navMenuSlice"
import soundReducer from "./soundSlice"
import preloaderReducer from "./preloaderSlice"
import scrollReducer from "./scrollSlice"
import projectReducer from "./projectSlice"




export const store = configureStore({
  reducer: {
    navMenu:navMenuReducer,
    sound:soundReducer,
    preloader:preloaderReducer,
    scroll:scrollReducer,
    project:projectReducer
  },
})