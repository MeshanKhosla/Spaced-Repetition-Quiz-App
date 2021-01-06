export const nextQuestion = () => {
    return {
        type: 'NEXT_QUESTION'
    }
}

export const replaceTimer = (n) => {
    return {
        type: 'REPLACE',
        payload: n
    }
}

export const updateRemainingTime = (n) => {
    return {
        type: 'UPDATE',
        payload: n
    }
}