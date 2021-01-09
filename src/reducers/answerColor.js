const answerColor = (state = '#f3f0f1', action) => {
    switch(action.type) {
        case 'UPDATE_ANSWER_COLOR':
            return '#32CD32';
        case 'REVERT_ANSWER_COLOR':
            return '#f3f0f1';
        default:
            return state;
    }
}
export default answerColor;