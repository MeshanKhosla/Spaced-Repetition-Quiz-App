const correctAnswerAmt = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT_CORRECT_ANS':
            return state + 1;
        default:
            return state;
    }
}
export default correctAnswerAmt;