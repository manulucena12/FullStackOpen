import { setDiaries } from "../Slices/diaries"
import { AppDispatch } from "../store"
import { getDiariesServices } from '../../Services/diaries'

export const getDiariesAction  = () => {
    return async (dispatch: AppDispatch) => {
        const res = await getDiariesServices()
        dispatch(setDiaries(res))
    }
}