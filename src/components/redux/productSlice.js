import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { customAxiosApi } from '../reuse/CustomAxios'
import { STATUS_FETCH, API_NAME } from '../dataConst'

export const fetchProductsAll = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    return customAxiosApi.get(API_NAME.PRODUCTS)
      .then(response => {
        const { data } = response.data
        return data
      })
  }
)

export const fetchProduct = createAsyncThunk(
  'products/fetchProduct',
  async (id) => {
    return customAxiosApi.get(`${API_NAME.PRODUCTS}/${id}`)
      .then(response => {
        const { data } = response.data
        return data
      })
  }
)

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    list: [],
    loading: 'idle',
  },

  reducers: {
    defaultState: (state, action) => {
      state.list = []
      state.loading = 'idle'
    },

    defaultListOrders: (state, action) => {
      state.list = []
    },

    defaultLoading: (state, action) => {
      state.loading = 'idle'
    }
  },

  extraReducers: {
    [fetchProductsAll.pending]: (state, action) => {
      // Add user to the state array
      // state.list = [...state.list]
      state.loading = STATUS_FETCH.LOADING
    },

    [fetchProductsAll.fulfilled]: (state, action) => {
      // Add user to the state array

      state.list = action.payload
      state.loading = STATUS_FETCH.SUCCESS
    },

    [fetchProductsAll.rejected]: (state, action) => {
      // Add user to the state array
      state.loading = STATUS_FETCH.FAILED
    },
  }
})

const { actions, reducer } = productsSlice

export const {
  defaultLoading,
  defaultState,
  defaultListOrders
} = actions

export default reducer
