import { createSlice } from '@reduxjs/toolkit'

export const newAction = createSlice({
  name: 'newAction',
  initialState: {
    infoPost: {},
    dataPost: {}
  },

  reducers: {
    setStatusNavNew: (state, action) => {
      state.infoPost = action.payload
    },

    setDataPost: (state, action) => {
      state.dataPost = action.payload
    }
  },
})

const { actions, reducer } = newAction

export const { setStatusNavNew, setDataPost } = actions

export default reducer
