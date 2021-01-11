// export const nextQuestion = () => {
//     return {
//         type: 'NEXT_QUESTION'
//     }
// }

// export const replaceTimer = (n) => {
//     return {
//         type: 'REPLACE',
//         payload: n
//     }
// }

export const updateRemainingTime = n => {
    return {
        type: 'UPDATE',
        payload: n
    }
}

export const updateAnswerColor = () => {
    return {
        type: 'UPDATE_ANSWER_COLOR'
    }
}

export const revertAnswerColor = () => {
    return {
        type: 'REVERT_ANSWER_COLOR'
    }
}

export const toggleTimerPlaying = () => {
    return {
        type: 'TOGGLE_TIMER'
    }
}

export const showResultsPage = () => {
    return {
        type: 'RESULTS_PAGE'
    }
}

export const incrementCorrectAnswerAmt = () => {
    return {
        type: 'INCREMENT_CORRECT_ANS'
    }
}

export const incrementIncorrectAnswerAmt = () => {
    return {
        type: 'INCREMENT_INCORRECT_ANS'
    }
}

export const toggleUsePqOrder = () => {
    return {
        type: "TOGGLE_USE_PQ_ORDER"
    }
}

