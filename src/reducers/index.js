import { combineReducers } from 'redux';
import currentQuestion from './currentQuestion'
import TimerReducer from './TimerReducer'
import  remainingTime from './remainingTime'
import answerColor from './answerColor'
import timerPlaying from './timerPlaying'
import showResultsPage from './showResultsPage'
import correctAnswerAmt from './correctAnswerAmt'
import incorrectAnswerAmt from './incorrectAnswerAmt'
import quizTimer from './quizTimer'
import pqOrder from './pqOrder'


const allReducers = combineReducers({
    currentQuestion: currentQuestion,
    timer: TimerReducer,
    remainingTime: remainingTime,
    answerColor: answerColor,
    timerPlaying: timerPlaying,
    showResultsPage: showResultsPage,
    correctAnswerAmt: correctAnswerAmt,
    incorrectAnswerAmt: incorrectAnswerAmt,
    quizTimer: quizTimer,
    pqOrder: pqOrder,
})
export default allReducers;