import { createSlice } from '@reduxjs/toolkit'

export const keySearchProductSlice = createSlice({
  name: 'keySearchProductSlice',
  initialState: {
    key: {},
  },

  reducers: {
    setKeySearchProduct: (state, action) => {
      state.key = action.payload
    }
  },
})

const { actions, reducer } = keySearchProductSlice

export const { setKeySearchProduct } = actions

export default reducer
