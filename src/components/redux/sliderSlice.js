import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { customAxiosApi } from '../reuse/CustomAxios'
import { STATUS_FETCH, API_NAME } from '../dataConst'

export const fetchSlider = createAsyncThunk(
  'orders/fetchSlider',
  async (id) => {
    return customAxiosApi.get(`${API_NAME.SLIDER}`)
      .then(response => {
        const { data } = response.data
        return data
      })
  }
)

export const sliderSlice = createSlice({
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
    [fetchSlider.pending]: (state, action) => {
      // Add user to the state array
      // state.list = [...state.list]
      state.loading = STATUS_FETCH.LOADING
    },

    [fetchSlider.fulfilled]: (state, action) => {
      // Add user to the state array
      state.list = action.payload
      state.loading = STATUS_FETCH.SUCCESS
    },

    [fetchSlider.rejected]: (state, action) => {
      // Add user to the state array
      state.loading = STATUS_FETCH.FAILED
    },
  }
})

const { actions, reducer } = sliderSlice

export const {
  defaultLoading,
  defaultState,
  defaultList
} = actions

export default reducer
