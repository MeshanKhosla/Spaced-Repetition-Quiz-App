import { React, useState } from 'react'
import { useSelector } from 'react-redux';
import { revertAnswerColor, updateAnswerColor, toggleTimerPlaying, incrementIncorrectAnswerAmt } from "../actions";
import { store } from "../index";

/**
 * Component that creates incorrect options
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
    
    const [answerColor, setAnswerColor] = useState('#f3f0f1')
    const timeRemaining = useSelector(state => state.remainingTime);

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
                        setAnswerColor,
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

// Logic that handles incorrect question click
const handleOnclick =  (
        question, 
        nextQuestion,
        questionIndex, 
        setCurrentQuestionIndex, 
        setQuestionTimerDuration, 
        setTimerKey,
        timeRemaining,
        setAnswerColor,
    ) => {

        question.incorrectAnswer(timeRemaining)
        setAnswerColor('#ff0000'); // change wrong answer to red
        store.dispatch(updateAnswerColor()) // change right answer to green
        store.dispatch(toggleTimerPlaying())
        store.dispatch(incrementIncorrectAnswerAmt())

        // Wait a second so user can see if they got the question right
        setTimeout(()=> {
            setQuestionTimerDuration(nextQuestion.timeAllowed)
            setCurrentQuestionIndex(questionIndex + 1)
            setTimerKey(questionIndex + 1)
            store.dispatch(revertAnswerColor())
            store.dispatch(toggleTimerPlaying())
            setAnswerColor('#f3f0f1') // change wrong answer back to original
    }, 1000)
}

export default QuestionOption;
