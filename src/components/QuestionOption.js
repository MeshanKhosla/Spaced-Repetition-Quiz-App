import React from 'react'
import { useDispatch } from 'react-redux';
import { nextQuestion, replaceTimer } from '../actions';

const QuestionOption = ({ option, currQuestionObj, nextQuestionObj }) => {
    const dispatch = useDispatch();
    const currQuestion = currQuestionObj[0];
    const followingQuestion = nextQuestionObj[0];

    return (
        <>
            <button 
                onClick={() => 
                    handleOnclick(option, currQuestion, followingQuestion, dispatch)
                } 
                className="questionOption">
                <h1>{option}</h1>
            </button>
            <div></div> {/* Moves every option to a new line */}
        </>
    )
}

const handleOnclick = (option, currQuestion, followingQuestion, dispatch) => {
    if(option === currQuestion.answer) {
        correctAnswer(currQuestion)
    } else {
        incorrectAnswer(currQuestion)
    }
    
    if (followingQuestion != -1) {
        dispatch(replaceTimer(followingQuestion.timeAllowed));
    } else {
        dispatch(replaceTimer(100))
    }
    
    dispatch(nextQuestion());
}

const correctAnswer = (q) => {
    console.log("Correct")
    let timeRemaining = 5 // Need to get actual time remaining
    q.points += timeRemaining
    q.timeAllowed = q.timeAllowed - getChangeTimeAmt(true, timeRemaining)
}
    
const incorrectAnswer = (q) => {
    console.log("Incorrect")
    let timeRemaining = 14 // Need to get actual time remaining
    q.points -= timeRemaining
    q.timeAllowed = q.timeAllowed + getChangeTimeAmt(false, timeRemaining)
}

const getChangeTimeAmt = (correctAns, timeRemaining) => {
    let thresholdOne = 5;
    let thresholdTwo = 2.5;
    if (!correctAns) {
        thresholdOne = 10
        thresholdTwo = 5;
    }

    let distanceToT1 = Math.abs(timeRemaining / 2) - thresholdOne;
    let distanceToT2 = Math.abs(timeRemaining / 2) - thresholdTwo;

    if (distanceToT1 <= distanceToT2) {
        return thresholdOne;
    }
    return thresholdTwo
}

export default QuestionOption;
