export const voteQuoteAction = (id) => {
    return {
        type: 'VOTE_QUOTE',
        payload: {
            id
        }
    }   
}