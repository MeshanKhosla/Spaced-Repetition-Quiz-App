export const increment = (n) => {
    return {
        type: 'INCREMENT',
        payload: n,
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const login = () => {
    return {
        type: 'SIGN_IN'
    }
}

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

export const updateCurrQuestionTime = (n) => {
    return {
        type: 'REPLACE',
        payload: n,
    }
}