import { createSlice } from '@reduxjs/toolkit'

export const singlDocumentSlice = createSlice({
  name: 'documentList',
  initialState: {
    docDetail : {}
  } ,
  reducers: {
    addDocument : (state,action) => {
        state.docDetail = action.payload
    },
    
   
  }
})

// Action creators are generated for each case reducer function
export const { addDocument } = singlDocumentSlice.actions

export default singlDocumentSlice.reducer