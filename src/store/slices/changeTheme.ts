import { createSlice } from '@reduxjs/toolkit'

const darkModeSlice = createSlice({
  name: 'changeTheme',
  initialState: false,
  reducers: {
    setThemeDarkMode: state => !state
  }
})

export const { setThemeDarkMode } = darkModeSlice.actions

export default darkModeSlice.reducer
