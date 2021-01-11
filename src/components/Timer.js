import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useSelector } from "react-redux";
import { updateRemainingTime, updateAnswerColor, revertAnswerColor, toggleTimerPlaying, showResultsPage, incrementIncorrectAnswerAmt } from "../actions";
import { store } from "../index";

/**
 * Component that creates timers.
 * Counts question wrong if question timer ends.
 * Dispatches action to display Results page when quiz timer ends.
 */
const Timer = props => {
    const {
        duration,
        key,
        isQuestionTimer,
        currentQuestion,
        setCurrentQuestionIndex,
        setTimerKey,
        setQuestionTimerDuration,
        currentQuestionIndex,
        nextQuestion
    } = props;
    
    // Boolean that determines if the timer should be paused (for delay between questions)
    const timerPlaying = useSelector(state => state.timerPlaying)
    // Length of quiz timer -- retrieved from localstorage
    const quizTimer = parseInt(localStorage.getItem("Quiz length"))
    return (
        <>
            <CountdownCircleTimer
                key={key}
                isPlaying={timerPlaying}
                duration={isQuestionTimer ? duration : quizTimer}
                colors={[
                    ["#004777", 0.33],
                    ["#F7B801", 0.33],
                    ["#A30000", 0.33],
                ]}
                onComplete={() => {
                    isQuestionTimer ?
                    handleComplete(
                              currentQuestion,
                              nextQuestion,
                              currentQuestionIndex,
                              setCurrentQuestionIndex,
                              setTimerKey,
                              setQuestionTimerDuration,
                          )
                        : endQuiz();
                }}
            >
                {({ remainingTime }) => {
                    if (isQuestionTimer) {
                        store.dispatch(updateRemainingTime(remainingTime));
                    }
                    return remainingTime;
                }}
            </CountdownCircleTimer>
        </>
    );
};

// Logic that handles an incorrect answer
const handleComplete = async (question, nextQuestion, idx, setCurrentQuestionIndex, setTimerKey, setQuestionTimerDuration) => {
    question.incorrectAnswer(0);
    store.dispatch(updateAnswerColor()) // change right answer to green
    store.dispatch(toggleTimerPlaying())
    store.dispatch(incrementIncorrectAnswerAmt())

    // Delayed so user can see question results
    setTimeout(() => {
        setQuestionTimerDuration(nextQuestion.timeAllowed);
        setCurrentQuestionIndex(idx + 1);
        setTimerKey(idx + 1);
        store.dispatch(revertAnswerColor()) // change right answer back to original
        store.dispatch(toggleTimerPlaying())
    }, 1000)
};

const endQuiz = () => {
    store.dispatch(toggleTimerPlaying())
    store.dispatch(showResultsPage())
};

export default Timer;
