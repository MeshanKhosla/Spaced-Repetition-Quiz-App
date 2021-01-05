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
                onClick={() => {
                    if(option === currQuestion.answer) {
                        console.log(currQuestion)
                        correctAnswer(currQuestion)
                    } else {
                        incorrectAnswer(currQuestion)
                    }
                    console.log(currQuestion)
                    if (followingQuestion != -1) {
                        dispatch(replaceTimer(followingQuestion.timeAllowed));
                    } else {
                        dispatch(replaceTimer(69))
                    }
                    // dispatch(replaceTimer(nextQuestion.timeAllowed))
                    dispatch(nextQuestion());
                }} 
                className="questionOption">
                <h1>{option}</h1>
            </button>
            <div></div> {/* Moves every option to a new line */}
        </>
    )
}

const correctAnswer = (q) => {
    console.log("Correct")
    let timeRemaining = 5
    q.points += timeRemaining
    q.timeAllowed = q.timeAllowed - getChangeTimeAmt(true, timeRemaining)
}
    
const incorrectAnswer = (q) => {
    console.log("Incorrect")
    let timeRemaining = 14
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

    // change_time = Math.min(threshold_1, threshold_2, 
    //                  key=lambda x: abs((time_remaining / 2) - x))
}

export default QuestionOption;
