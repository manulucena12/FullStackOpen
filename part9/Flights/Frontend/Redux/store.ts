import { configureStore } from '@reduxjs/toolkit'
import { diariesSlice } from './Slices/diaries'
import { notiSlice } from './Slices/notification'

export const store = configureStore({
    reducer: {
        diaries: diariesSlice.reducer,
        notification: notiSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch