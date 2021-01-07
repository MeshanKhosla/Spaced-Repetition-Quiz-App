import React from 'react';
import QuestionOption from './QuestionOption';

const CalibrationQuestions = (props) => {
    const {
        currentQuestionIndex,
        currentQuestion,
        setCurrentQuestionIndex,
        setQuestionTimerDuration,
        timerKey,
        setTimerKey,
        nextQuestion,
    } = props;

    return (
        <div className="question">
            <h1>{currentQuestion.text}</h1>
            {currentQuestion.options.map((option) => {
                return (
                    <QuestionOption
                        option={option}
                        currentQuestion={currentQuestion}
                        setQuestionTimerDuration={setQuestionTimerDuration} // used to create a new timer
                        currentQuestionIndex={currentQuestionIndex}
                        setCurrentQuestionIndex={setCurrentQuestionIndex}
                        timerkey={timerKey}
                        setTimerKey={setTimerKey}
                        nextQuestion={nextQuestion}
                    />
                );
            })}
        </div>
    )
}
export default CalibrationQuestions;