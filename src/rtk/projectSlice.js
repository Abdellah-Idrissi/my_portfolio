import { createSlice } from '@reduxjs/toolkit'

export const projectSlice = createSlice({
  name: 'project',
  initialState:false,
  reducers: {
    toggleProject: (state) => !state,
  },
})

export const { toggleProject } = projectSlice.actions

export default projectSlice.reducer