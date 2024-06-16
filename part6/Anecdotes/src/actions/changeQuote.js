import { voteQuote } from "../../store"
import { putAnecdoteService } from "../services/voteQuote"

export const putAnecdoteAction = (content,votes,id) => {
    return async (dispatch) => {
        const res = await putAnecdoteService(content,votes,id)
        dispatch(voteQuote(res))
    }
}