const quizTimer = (state = 180, action) => {
    switch(action.type) {
        case 'SET_QUIZ_TIMER':
            return action.payload;
        default:
            return state;
    }
}
export default quizTimer;