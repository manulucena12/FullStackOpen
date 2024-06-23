import { createSlice } from "@reduxjs/toolkit"

export const tokenSlice = createSlice({
    name: 'Token',
    initialState: null,
    reducers: {
        setToken(state,action){
            return action.payload.name
        }
    }
})

export const {setToken} = tokenSlice.actions