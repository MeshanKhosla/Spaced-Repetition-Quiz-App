import { combineReducers } from 'redux';
import remainingTime from './remainingTime'
import answerColor from './answerColor'
import timerPlaying from './timerPlaying'
import showResultsPage from './showResultsPage'
import correctAnswerAmt from './correctAnswerAmt'
import incorrectAnswerAmt from './incorrectAnswerAmt'
import pqOrder from './pqOrder'


const allReducers = combineReducers({
    remainingTime: remainingTime,
    answerColor: answerColor,
    timerPlaying: timerPlaying,
    showResultsPage: showResultsPage,
    correctAnswerAmt: correctAnswerAmt,
    incorrectAnswerAmt: incorrectAnswerAmt,
    pqOrder: pqOrder,
})
export default allReducers;