import { setAnecdotes } from "../../store"
import { getAnecdotesService } from "../services/getQuotes"

export const getAnecdotesAction = () => {
    return async (dispatch) => {
        const quotes = await getAnecdotesService()
        dispatch(setAnecdotes(quotes))
    }
}