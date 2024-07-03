import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Diary } from '../../Types/diaries'

export const diariesSlice = createSlice({
    name: 'Diaries',
    initialState: [] as Diary[],
    reducers: {
        setDiaries(state,action: PayloadAction<Diary[]>){
            return action.payload
        },
        addDiary(state,action: PayloadAction<Diary>){
            state.push(action.payload)
        }
    }
})

export const { setDiaries, addDiary } = diariesSlice.actions