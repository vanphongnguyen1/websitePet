import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { customAxiosApi } from '../reuse/CustomAxios'
import { STATUS_FETCH, API_NAME } from '../dataConst'

export const fetchOrderofCart = createAsyncThunk(
  'orders/fetchOrderofCart',
  async (id) => {
    return customAxiosApi.get(`${API_NAME.ORDERS}?usersID=${id}`)
      .then(response => {
        const { data } = response.data
        return data
      })
  }
)

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    list: [],
    loading: 'idle',
  },

  reducers: {
    defaultState: (state, action) => {
      state.list = []
      state.loading = 'idle'
    },

    defaultList: (state, action) => {
      state.list = []
    },

    defaultLoading: (state, action) => {
      state.loading = 'idle'
    }
  },

  extraReducers: {
    [fetchOrderofCart.pending]: (state, action) => {
      // Add user to the state array
      // state.list = [...state.list]
      state.loading = STATUS_FETCH.LOADING
    },

    [fetchOrderofCart.fulfilled]: (state, action) => {
      // Add user to the state array
      state.list = action.payload
      state.loading = STATUS_FETCH.SUCCESS
    },

    [fetchOrderofCart.rejected]: (state, action) => {
      // Add user to the state array
      state.loading = STATUS_FETCH.FAILED
    },
  }
})

const { actions, reducer } = ordersSlice

export const {
  defaultLoading,
  defaultState,
  defaultListCarts
} = actions

export default reducer
