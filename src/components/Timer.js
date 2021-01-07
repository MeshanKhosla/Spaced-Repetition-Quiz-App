import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useDispatch } from "react-redux";
import { updateRemainingTime } from "../actions";

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
    return (
        <>
            <CountdownCircleTimer
                key={key}
                isPlaying
                duration={duration}
                colors={[
                    ["#004777", 0.33],
                    ["#F7B801", 0.33],
                    ["#A30000", 0.33],
                ]}
                onComplete={() => {
                    isQuestionTimer
                        ? handleComplete(
                              currentQuestion,
                              nextQuestion,
                              currentQuestionIndex,
                              setCurrentQuestionIndex,
                              setTimerKey,
                              setQuestionTimerDuration
                          )
                        : showResultsPage();
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

const handleComplete = (question, nextQuestion, idx, setCurQuestionIndex, setTimerKey, setQuestionTimerDuration) => {
    question.incorrectAnswer(0);
    setCurQuestionIndex(idx + 1);
    setTimerKey(Math.random()); // need to replace this with real timerKey
    setQuestionTimerDuration(nextQuestion.timeAllowed);
};

const showResultsPage = () => {
    console.log("RESULTS");
};

export default Timer;
