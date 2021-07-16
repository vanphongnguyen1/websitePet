import { createSlice } from '@reduxjs/toolkit'

export const serviceAction = createSlice({
  name: 'serviceAction',
  initialState: {
    infoService: {},
    // dataPost: {}
  },

  reducers: {
    setStatusService: (state, action) => {
      state.infoService = action.payload
    },

    // setDataPost: (state, action) => {
    //   state.dataPost = action.payload
    // }
  },
})

const { actions, reducer } = serviceAction

export const { setStatusService } = actions

export default reducer
