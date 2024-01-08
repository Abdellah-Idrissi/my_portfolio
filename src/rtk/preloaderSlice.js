import { createSlice } from '@reduxjs/toolkit'

export const preloaderSlice = createSlice({
  name: 'preloader',
  initialState:true,
  reducers: {
    endPreloader: (state) => !state,
  },
})

export const { endPreloader } = preloaderSlice.actions

export default preloaderSlice.reducer