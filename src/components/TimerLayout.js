import React from "react";
import Timer from "./Timer";
import Collapsible from "react-collapsible";
import Trigger from "./Trigger";

/**
 * Component that adds quiz timer and question timer to screen.
 * Uses Collapsible library to allow timers to be collapsed.
 */
const TimerLayout = (props) => {
    const {
        questionTimerDuration,
        timerKey,
        currentQuestion,
        setCurrentQuestionIndex,
        setTimerKey,
        setQuestionTimerDuration,
        currentQuestionIndex,
        nextQuestion,
    } = props;

    return (
        <>
            {/* Question timer */}
            <div className="timer-wrapper">
                <div className="timers">
                    <Collapsible trigger={<Trigger text="Toggle Question Timer" />} open={true}>
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
                    <Collapsible trigger={<Trigger text="Toggle Quiz Timer" />} open={true}>
                        <Timer
                            className="quiz-timer"
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
            </div>
        </>
    );
};
export default TimerLayout;
