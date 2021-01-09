const showResultsPage = (state = false, action) => {
    switch(action.type) {
        case 'RESULTS_PAGE':
            return true;
        default:
            return state;
    }
}
export default showResultsPage;