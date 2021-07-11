import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { customAxiosApi } from '../reuse/CustomAxios'
import { STATUS_FETCH, API_NAME } from '../dataConst'

export const fetchLineageAll = createAsyncThunk(
  'lineages/fetchLineageAll',
  async () => {
    return customAxiosApi.get(API_NAME.PRODUCTS)
      .then(response => {
        const { data } = response.data
        return data
      })
  }
)

export const fetchLineageToGroup = createAsyncThunk(
  'lineages/fetchLineageToGroup',
  async (id) => {
    return customAxiosApi.get(`${API_NAME.LINEAGE}?groupID=${id}`)
      .then(response => {
        const { data } = response.data
        return data
      })
  }
)

export const lineageSlice = createSlice({
  name: 'lineages',
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
    [fetchLineageAll.pending]: (state, action) => {
      // Add user to the state array
      // state.list = [...state.list]
      state.loading = STATUS_FETCH.LOADING
    },

    [fetchLineageAll.fulfilled]: (state, action) => {
      // Add user to the state array

      state.list = action.payload
      state.loading = STATUS_FETCH.SUCCESS
    },

    [fetchLineageAll.rejected]: (state, action) => {
      // Add user to the state array
      state.loading = STATUS_FETCH.FAILED
    },
  }
})

const { actions, reducer } = lineageSlice

export const {
  defaultLoading,
  defaultState,
  defaultListOrders
} = actions

export default reducer
