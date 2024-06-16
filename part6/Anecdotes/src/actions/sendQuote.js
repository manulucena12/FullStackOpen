import { createQuote } from "../../store"
import { postAnecdoteService } from "../services/postQuote"

export const postAnecdoteAction = (content) => {
    return async (dispatch) => {
        const res = await postAnecdoteService(content)
        dispatch(createQuote(res))
    }
}