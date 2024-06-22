import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: 'User',
    initialState: null,
    reducers: {
        setUser(state,action){
            return action.payload
        }
    }
})

export const {setUser} = userSlice.actions