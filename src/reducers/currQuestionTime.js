const currQuestionTime = (state = 10, action) => {
    switch(action.type) {
        case 'UPDATE_TIME':
            return action.payload;
        default:
            return state;
    }
}
export default currQuestionTime;