import { createSlice } from '@reduxjs/toolkit'

export const credentialSlice = createSlice({
  name: 'credentials',
  initialState: {
    username: '',
    password:''
  },
  reducers: {
    setUsername : (state,action) => {
        state.username = action.payload
    },
    setPassword : (state,action) => {
        state.password = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUsername, setPassword } = credentialSlice.actions

export default credentialSlice.reducer