import { configureStore } from '@reduxjs/toolkit'
import credentialReducer from './credentialSlice'
import documentListReducer from './documentListSlice'
import singleDocumentReducer from './singleDocumentSlice'


export default configureStore({
  reducer: {
    credentials : credentialReducer,
    documentList : documentListReducer,
    documentDetails : singleDocumentReducer

  }
})