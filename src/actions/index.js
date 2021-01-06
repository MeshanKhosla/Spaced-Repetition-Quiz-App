export const nextQuestion = () => {
    return {
        type: 'NEXT_QUESTION'
    }
}

export const replaceTimer = (n) => {
    return {
        type: 'REPLACE',
        payload: n,
    }
}
