import axios from 'axios'
import { Diary } from '../Types/diaries'

export const getDiariesServices = async () : Promise<Diary[]> => {
    const res = await axios.get('http://localhost:3002/api/diaries')
    return res.data
}

export const createDiaryService = async (diary: Diary) => {
    const res = await axios.post('http://localhost:3002/api/diaries', diary)
    return res.data
}