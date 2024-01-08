import { createSlice } from '@reduxjs/toolkit'

export const scrollSlice = createSlice({
  name: 'scroll',
  initialState:false,
  reducers: {
    startScroll: (state) => true,
  },
})

export const { startScroll } = scrollSlice.actions

export default scrollSlice.reducer