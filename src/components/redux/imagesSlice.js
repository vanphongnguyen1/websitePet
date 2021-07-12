import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { customAxiosApi } from '../reuse/CustomAxios'
import { STATUS_FETCH, API_NAME } from '../dataConst'

export const fetchImages = createAsyncThunk(
  'images/fetchImages',
  async () => {
    return customAxiosApi.get(`${API_NAME.IMAGES}`)
      .then(response => {
        const { data } = response.data
        return data
      })
  }
)

export const imagesSlice = createSlice({
  name: 'images',
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
    [fetchImages.pending]: (state, action) => {
      // Add user to the state array
      // state.list = [...state.list]
      state.loading = STATUS_FETCH.LOADING
    },

    [fetchImages.fulfilled]: (state, action) => {
      // Add user to the state array
      state.list = action.payload
      state.loading = STATUS_FETCH.SUCCESS
    },

    [fetchImages.rejected]: (state, action) => {
      // Add user to the state array
      state.loading = STATUS_FETCH.FAILED
    },
  }
})

const { actions, reducer } = imagesSlice

export const {
  defaultLoading,
  defaultState,
  defaultList
} = actions

export default reducer
