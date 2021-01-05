import Timer from '../components/Timer';

const TimerReducer = (state = <Timer duration={20} />, action) => {
    switch(action.type) {
        case 'REPLACE':
            return <Timer duration={action.payload} key={Math.random()}/>; // Definitely need to change this, maybe with question number
        default:
            return state;
    }
}
export default TimerReducer;