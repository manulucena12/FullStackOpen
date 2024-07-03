import { configureStore } from '@reduxjs/toolkit'
import { diariesSlice } from './Slices/diaries'

export const store = configureStore({
    reducer: {
        diaries: diariesSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch