import React from "react";
import Timer from "./Timer";
import Collapsible from 'react-collapsible';

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
                <Collapsible trigger="Toggle Question Timer" open={true}>
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
                </Collapsible>
                
                {/* Quiz timer */}
                <Collapsible trigger="Toggle Quiz Timer" open={true}>
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
                </Collapsible>
            </div>
        </>
    );
};
export default TimerLayout;
