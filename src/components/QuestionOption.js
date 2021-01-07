import React from 'react'
import { useSelector } from 'react-redux';

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
    } = props;

    const timeRemaining = useSelector(state => state.remainingTime);
    return (
        <>
            <button
                onClick={() => 
                    handleOnclick(
                        option,
                        currentQuestion, 
                        nextQuestion,
                        currentQuestionIndex,
                        setCurrentQuestionIndex, 
                        setQuestionTimerDuration, 
                        timerKey,
                        setTimerKey,
                        timeRemaining
                    )
                } 
                className="option-btn">
                <h2>{option}</h2>
            </button>
            <div></div> {/* Moves every option to a new line */}
        </>
    )
}

const handleOnclick = (
        option, 
        question, 
        nextQuestion,
        questionIndex, 
        setCurQuestionIndex, 
        setQuestionTimerDuration, 
        timerKey, 
        setTimerKey,
        timeRemaining
    ) => {
    
    if(option === question.answer) {
        question.correctAnswer(timeRemaining)
    } else {
        question.incorrectAnswer(timeRemaining)
    }

    setCurQuestionIndex(questionIndex + 1)
    setTimerKey(Math.random()) // need to replace this with real timerKey
    setQuestionTimerDuration(nextQuestion.timeAllowed)
}

export default QuestionOption;
