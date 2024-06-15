export const createQuoteAction = (content) => {
    const getId = () => (100000 * Math.random()).toFixed(0)
    return {
        type: 'CREATE_QUOTE',
        payload: {
            content,
            votes: 0,
            id: getId()
        }
    }
}