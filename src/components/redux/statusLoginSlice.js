import { createSlice } from '@reduxjs/toolkit'

export const statusLoginSlice = createSlice({
    name: 'statusLogin',
    initialState: {
        status: false
    },
    reducers: {
        setStatusLogin: (state, action) => {
            state.status = action.payload
        }
    }
})

const { actions, reducer } = statusLoginSlice

export const { setStatusLogin } = actions

export default reducer