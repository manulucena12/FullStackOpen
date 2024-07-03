import { addDiary, setDiaries } from "../Slices/diaries"
import { AppDispatch } from "../store"
import { createDiaryService, getDiariesServices } from '../../Services/diaries'
import { Diary } from "../../Types/diaries"

export const getDiariesAction  = () => {
    return async (dispatch: AppDispatch) => {
        const res = await getDiariesServices()
        dispatch(setDiaries(res))
    }
}

export const createDiaryAction = (diary: Diary) => {
    return async (dispatch: AppDispatch) => {
        const res = await createDiaryService(diary)
        dispatch(addDiary(res))
    }
}