import { createSlice } from '@reduxjs/toolkit'

export const soundSlice = createSlice({
  name: 'sound',
  initialState:false,
  reducers: {
    toggleSound: (state) => !state,
  },
})

export const { toggleSound } = soundSlice.actions

export default soundSlice.reducer