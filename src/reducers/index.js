import { combineReducers } from 'redux';
import currentQuestion from './currentQuestion'
import TimerReducer from './TimerReducer'
import  remainingTime from './remainingTime'

const allReducers = combineReducers({
    currentQuestion: currentQuestion,
    timer: TimerReducer,
    remainingTime: remainingTime
})
export default allReducers;