const incorrectAnswerAmt = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT_INCORRECT_ANS':
            return state + 1;
        default:
            return state;
    }
}
export default incorrectAnswerAmt;