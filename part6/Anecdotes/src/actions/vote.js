// Exercise 6.6 already done!
export const voteQuoteAction = (id) => {
    return {
        type: 'VOTE_QUOTE',
        payload: {
            id
        }
    }   
}