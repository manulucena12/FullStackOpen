import axios from 'axios'
import { Diary } from '../Types/diaries'

export const getDiariesServices = async () : Promise<Diary[]> => {
    const res = await axios.get('http://localhost:3002/api/diaries')
    return res.data
}