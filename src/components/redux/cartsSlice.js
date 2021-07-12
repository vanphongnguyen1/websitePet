import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { customAxiosApi } from '../reuse/CustomAxios'
import { STATUS_FETCH, API_NAME } from '../dataConst'

export const fetchCartOfUser = createAsyncThunk(
  'orders/fetchCartOfUser',
  async (id) => {
    return customAxiosApi.get(`${API_NAME.CART}?usersID=${id}`)
      .then(response => {
        const { data } = response.data
        return data
      })
  }
)

export const cartsSlice = createSlice({
  name: 'orders',
  initialState: {
    list: {},
    loading: 'idle',
  },

  reducers: {
    defaultState: (state, action) => {
      state.list = {}
      state.loading = 'idle'
    },

    defaultList: (state, action) => {
      state.list = {}
    },

    defaultLoading: (state, action) => {
      state.loading = 'idle'
    }
  },

  extraReducers: {
    [fetchCartOfUser.pending]: (state, action) => {
      // Add user to the state array
      // state.list = [...state.list]
      state.loading = STATUS_FETCH.LOADING
    },

    [fetchCartOfUser.fulfilled]: (state, action) => {
      // Add user to the state array
      state.list = action.payload[0]
      state.loading = STATUS_FETCH.SUCCESS
    },

    [fetchCartOfUser.rejected]: (state, action) => {
      // Add user to the state array
      state.loading = STATUS_FETCH.FAILED
    },
  }
})

const { actions, reducer } = cartsSlice

export const {
  defaultLoading,
  defaultState,
  defaultListCarts
} = actions

export default reducer
