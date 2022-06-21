import { createSlice } from '@reduxjs/toolkit'

export const documentListSlice = createSlice({
  name: 'documentList',
  initialState: {
    articles : []
  } ,
  reducers: {
    addTask : (state,action) => {
        state.articles.push(action.payload)
    },
    emptyTask : (state,action) => {
        state.articles = []
    },
   setArrTask : (state,action) => {
    state.articles = action.payload
   }
  }
})

// Action creators are generated for each case reducer function
export const { addTask ,emptyTask,setArrTask} = documentListSlice.actions

export default documentListSlice.reducer