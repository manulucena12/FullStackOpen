import { createSlice } from "@reduxjs/toolkit"

export const notiSlice = createSlice({
    name: 'Notification',
    initialState: null,
    reducers: {
        setNotification(state,action){
            return action.payload.name
        }
    }
})

export const {setNotification} = notiSlice.actions