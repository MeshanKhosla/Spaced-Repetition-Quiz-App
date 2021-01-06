const remainingTime = (state = 100, action) => {
    switch(action.type) {
        case 'UPDATE':
            return action.payload;
        default:
            return state;
    }
}
export default remainingTime;