import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const notiSlice = createSlice({
    name: 'Notification',
    initialState: null as null | string,
    reducers: {
        setNotification(state,action: PayloadAction<string | null>){
            return action.payload
        }
    }
})

export const { setNotification } = notiSlice.actions