import axios from 'axios'
import { Diary } from '../Types/diaries'
import { setNotification } from '../Redux/Slices/notification'
import { AppDispatch, store } from '../Redux/store'

const dispatch: AppDispatch = store.dispatch

export const getDiariesServices = async () : Promise<Diary[]> => {
    const res = await axios.get('http://localhost:3002/api/diaries')
    return res.data
}

export const createDiaryService = async (diary: Diary) => {
    try{
        const res = await axios.post('http://localhost:3002/api/diaries', diary)
        return res.data
    }
    catch(error){
        let errorMessage = 'An unexpected error occurred';
        
        if (axios.isAxiosError(error)) {
            if (error.response) {
                errorMessage = error.response.data
            } else if (error.request) {
                errorMessage = 'No response received from server'
            } else {
                errorMessage = error.message
            }
        } else {
            errorMessage = 'An unexpected error occurred'
        }

        dispatch(setNotification(errorMessage))
    }
}