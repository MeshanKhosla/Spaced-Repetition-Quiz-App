import { React } from 'react'
import { useSelector } from 'react-redux';
import { revertAnswerColor, updateAnswerColor, toggleTimerPlaying, incrementCorrectAnswerAmt } from '../actions';
import { store } from '../index';

/**
 * Component that creates Correct answer option. 
 */
const QuestionOption = props => {
    const {
        option,
        currentQuestion,
        setQuestionTimerDuration,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        setTimerKey,
        nextQuestion,
    } = props;
    
    const timeRemaining = useSelector(state => state.remainingTime);
    const answerColor = useSelector(state => state.answerColor);
    return (
        <>
            <button style={{ backgroundColor: answerColor }}
                onClick={() => 
                {
                    handleOnclick(
                        currentQuestion, 
                        nextQuestion,
                        currentQuestionIndex,
                        setCurrentQuestionIndex, 
                        setQuestionTimerDuration, 
                        setTimerKey,
                        timeRemaining,
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

// Logic that handles correct answers
const handleOnclick = async (
        question, 
        nextQuestion,
        questionIndex, 
        setCurrentQuestionIndex, 
        setQuestionTimerDuration, 
        setTimerKey,
        timeRemaining,
    ) => {    
    question.correctAnswer(timeRemaining)
    store.dispatch(updateAnswerColor()) // Changes answer to green
    store.dispatch(toggleTimerPlaying()) // Pauses timer temporarily
    store.dispatch(incrementCorrectAnswerAmt()) 

    // Wait a second so user can see if they got the answer correct
    setTimeout(()=> {
        setQuestionTimerDuration(nextQuestion.timeAllowed) // Updates timer
        setCurrentQuestionIndex(questionIndex + 1)
        setTimerKey(questionIndex + 1)
        store.dispatch(revertAnswerColor()) // Changes answer back to original
        store.dispatch(toggleTimerPlaying())
    }, 1000)
}

export default QuestionOption;