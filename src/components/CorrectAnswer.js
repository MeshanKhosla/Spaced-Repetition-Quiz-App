import { React } from 'react'
import { useSelector } from 'react-redux';
import { revertAnswerColor, updateAnswerColor, toggleTimerPlaying, incrementCorrectAnswerAmt } from '../actions';
import { store } from '../index';

import currentQuestion from '../reducers/currentQuestion';

const QuestionOption = (props) => {
    const {
        option,
        currentQuestion,
        setQuestionTimerDuration,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        timerKey,
        setTimerKey,
        nextQuestion,
        isCorrect,
    } = props;
    
    const timeRemaining = useSelector(state => state.remainingTime);
    const answerColor = useSelector(state => state.answerColor);

    return (
        <>
            {/* {console.log(currentQuestion.text, currentQuestion.timeAllowed)} */}
            <button style={{backgroundColor: answerColor}}
                onClick={() => 
                {
                    handleOnclick(
                        option,
                        currentQuestion, 
                        nextQuestion,
                        currentQuestionIndex,
                        setCurrentQuestionIndex, 
                        setQuestionTimerDuration, 
                        timerKey,
                        setTimerKey,
                        timeRemaining,
                        isCorrect,
                    )
                }
                } 
                className="option-btn">
                <h2>{option}</h2>
            </button>
            <div></div> {/* Moves every option to a new line */}
        </>
    )
}

const delay = ms => new Promise(res => setTimeout(res, ms));
const handleOnclick = async (
        option, 
        question, 
        nextQuestion,
        questionIndex, 
        setCurQuestionIndex, 
        setQuestionTimerDuration, 
        timerKey, 
        setTimerKey,
        timeRemaining,
        isCorrect,
    ) => {

    question.correctAnswer(timeRemaining)
    store.dispatch(updateAnswerColor()) // Changes answer to green
    store.dispatch(toggleTimerPlaying())
    store.dispatch(incrementCorrectAnswerAmt())
    await delay(1000) // delay so user can see if they got the question right
    store.dispatch(revertAnswerColor()) // Changes answer back to original
    store.dispatch(toggleTimerPlaying())

    setCurQuestionIndex(questionIndex + 1)
    setTimerKey(Math.random()) // need to replace this with real timerKey
    // console.log(nextQuestion.text, nextQuestion.timeAllowed)
    setQuestionTimerDuration(nextQuestion.timeAllowed)
}

export default QuestionOption;