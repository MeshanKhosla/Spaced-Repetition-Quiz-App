const pqOrder = (state = true, action) => {
    switch(action.type) {
        case 'TOGGLE_USE_PQ_ORDER':
            return !state;
        default:
            return state;
    }
}
export default pqOrder;