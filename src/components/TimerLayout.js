import React from "react";
import Timer from "./Timer";

const TimerLayout = (props) => {
    const {
        questionTimerDuration,
        timerKey,
        quizTimerDuration,
        currentQuestion,
        setCurrentQuestionIndex,
        setTimerKey,
        setQuestionTimerDuration,
        currentQuestionIndex,
        nextQuestion
    } = props;
    
    return (
        <>
            {/* Question timer */}
            <div className="timers">
                <Timer
                    duration={questionTimerDuration}
                    key={timerKey}
                    isQuestionTimer={true}
                    currentQuestion={currentQuestion}
                    setCurrentQuestionIndex={setCurrentQuestionIndex}
                    setTimerKey={setTimerKey}
                    setQuestionTimerDuration={setQuestionTimerDuration}
                    currentQuestionIndex={currentQuestionIndex}
                    nextQuestion={nextQuestion}
                />
                {/* Quiz timer */}
                <Timer
                    duration={quizTimerDuration}
                    key={"DOES NOT CHANGE"}
                    isQuestionTimer={false}
                    currentQuestion={currentQuestion}
                    setCurrentQuestionIndex={setCurrentQuestionIndex}
                    setTimerKey={setTimerKey}
                    setQuestionTimerDuration={setQuestionTimerDuration}
                    currentQuestionIndex={currentQuestionIndex}
                    nextQuestion={nextQuestion}
                />
            </div>
        </>
    );
};

export default TimerLayout;
