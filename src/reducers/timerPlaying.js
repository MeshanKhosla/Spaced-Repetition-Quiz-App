const timerPlaying = (state = true, action) => {
    switch(action.type) {
        case 'TOGGLE_TIMER':
            return !state
        default:
            return state;
    }
}
export default timerPlaying;