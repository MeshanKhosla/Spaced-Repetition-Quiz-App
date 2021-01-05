import counterReducer from './counter';
import isLogged from './isLogged';
import currentQuestion from './currentQuestion'
import { combineReducers } from 'redux';
import TimerReducer from './TimerReducer'
import currentQuestionTime from './currQuestionTime'

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: isLogged,
    currentQuestion: currentQuestion,
    timer: TimerReducer,
    currentQuestionTime: currentQuestionTime,
})
export default allReducers;