import currentQuestion from './currentQuestion'
import { combineReducers } from 'redux';
import TimerReducer from './TimerReducer'

const allReducers = combineReducers({
    currentQuestion: currentQuestion,
    timer: TimerReducer,
})
export default allReducers;