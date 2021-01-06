import React from 'react'
import { useSelector } from 'react-redux';
// import { nextQuestion, replaceTimer } from '../actions';

const QuestionOption = ({ 
        option,
        questionData,
        setQuestionData,
        currentQuestion,
        setQuestionTimerDuration,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        timerKey,
        setTimerKey,
        nextQuestion,
    }) => {
    // const currQuestion = currQuestionObj[0];
    // const followingQuestion = nextQuestionObj[0];
    const timeRemaining = useSelector(state => state.remainingTime);
    
    return (
        <>
            <button 
                onClick={() => 
                    handleOnclick(
                        option, // user chosen answer
                        currentQuestion, 
                        nextQuestion,
                        setQuestionData, // to change timeAllowed and points
                        currentQuestionIndex,
                        setCurrentQuestionIndex, // to go to next question
                        setQuestionTimerDuration, // to create new timer
                        timerKey,
                        setTimerKey,
                        timeRemaining
                    )
                } 
                className="questionOption">
                <h1>{option}</h1>
            </button>
            <div></div> {/* Moves every option to a new line */}
        </>
    )
}

const handleOnclick = (
        option, 
        question, 
        nextQuestion,
        setQuestionData, 
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

// const correctAnswer = (question, timeRemaining) => {
//     console.log("Correct")
//     question.points += timeRemaining
//     question.timeAllowed = question.timeAllowed - getChangeTimeAmt(true, timeRemaining)
// }
    
// const incorrectAnswer = (question, timeRemaining) => {
//     console.log("Incorrect")
//     question.points -= timeRemaining
//     question.timeAllowed = question.timeAllowed + getChangeTimeAmt(false, timeRemaining)
// }

// const getChangeTimeAmt = (correctAns, timeRemaining) => {
//     let thresholdOne = 5;
//     let thresholdTwo = 2.5;
//     if (!correctAns) {
//         thresholdOne = 10
//         thresholdTwo = 5;
//     }

//     let distanceToT1 = Math.abs(timeRemaining / 2) - thresholdOne;
//     let distanceToT2 = Math.abs(timeRemaining / 2) - thresholdTwo;

//     if (distanceToT1 <= distanceToT2) {
//         return thresholdOne;
//     }
//     return thresholdTwo
// }

export default QuestionOption;
