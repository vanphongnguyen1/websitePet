import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { customAxiosApi } from '../reuse/CustomAxios'
import { STATUS_FETCH, API_NAME } from '../dataConst'

export const fetchGroups = createAsyncThunk(
  'groups/fetchGroups',
  async () => {
    return customAxiosApi.get(API_NAME.GROUPS)
      .then(response => {
        const { data } = response.data
        return data
      })
  }
)

export const groupSlice = createSlice({
  name: 'groups',
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
    [fetchGroups.pending]: (state, action) => {
      // Add user to the state array
      // state.list = [...state.list]
      state.loading = STATUS_FETCH.LOADING
    },

    [fetchGroups.fulfilled]: (state, action) => {
      // Add user to the state array

      state.list = action.payload
      state.loading = STATUS_FETCH.SUCCESS
    },

    [fetchGroups.rejected]: (state, action) => {
      // Add user to the state array
      state.loading = STATUS_FETCH.FAILED
    },
  }
})

const { actions, reducer } = groupSlice

export const {
  defaultLoading,
  defaultState,
  defaultList
} = actions

export default reducer
