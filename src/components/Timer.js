import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useDispatch, useSelector } from "react-redux";
import { updateRemainingTime, updateAnswerColor, revertAnswerColor, toggleTimerPlaying, showResultsPage, incrementIncorrectAnswerAmt } from "../actions";
import { store } from "../index";

const Timer = (props) => {
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
    
    const dispatch = useDispatch();
    const timerPlaying = useSelector(state => state.timerPlaying)
    const quizTimer = useSelector(state => state.quizTimer)

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
                              dispatch
                          )
                        : endQuiz();
                }}
            >
                {({ remainingTime }) => {
                    if (isQuestionTimer) {
                        dispatch(updateRemainingTime(remainingTime));
                    }
                    return remainingTime;
                }}
            </CountdownCircleTimer>
        </>
    );
};

const handleComplete = async (question, nextQuestion, idx, setCurrentQuestionIndex, setTimerKey, setQuestionTimerDuration, dispatch) => {
    question.incorrectAnswer(0);
    store.dispatch(updateAnswerColor()) // change right answer to green
    store.dispatch(toggleTimerPlaying())
    store.dispatch(incrementIncorrectAnswerAmt())

    setTimeout(() => {
        setQuestionTimerDuration(nextQuestion.timeAllowed);
        setCurrentQuestionIndex(idx + 1);
        setTimerKey(Math.random()); // need to replace this with real timerKey
        store.dispatch(revertAnswerColor()) // change right answer back to original
        store.dispatch(toggleTimerPlaying())
    }, 1000)
};

const endQuiz = () => {
    store.dispatch(toggleTimerPlaying())
    store.dispatch(showResultsPage())
};

export default Timer;
