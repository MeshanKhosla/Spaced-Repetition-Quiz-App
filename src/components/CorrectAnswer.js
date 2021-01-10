import { React } from 'react'
import { useSelector } from 'react-redux';
import { revertAnswerColor, updateAnswerColor, toggleTimerPlaying, incrementCorrectAnswerAmt } from '../actions';
import { store } from '../index';

const QuestionOption = (props) => {
    const {
        option,
        currentQuestion,
        setQuestionTimerDuration,
        currentQuestionIndex,
        setCurrentQuestionIndex,
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

const handleOnclick = async (
        option, 
        question, 
        nextQuestion,
        questionIndex, 
        setCurrentQuestionIndex, 
        setQuestionTimerDuration, 
        setTimerKey,
        timeRemaining,
        isCorrect,
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