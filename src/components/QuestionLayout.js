import React from 'react';
import QuestionOption from './QuestionOption';
import CorrectAnswer from './CorrectAnswer';


const QuestionLayout = (props) => {
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
            {currentQuestion.options.length == 0 ? <h3>This question has no options</h3> : 
            <>
                {currentQuestion.options.map((option) => {
                    return (
                        (option !== currentQuestion.answer ?
                        <QuestionOption
                            option={option}
                            currentQuestion={currentQuestion}
                            setQuestionTimerDuration={setQuestionTimerDuration} // used to create a new timer
                            currentQuestionIndex={currentQuestionIndex}
                            setCurrentQuestionIndex={setCurrentQuestionIndex}
                            timerkey={timerKey}
                            setTimerKey={setTimerKey}
                            nextQuestion={nextQuestion}
                            isCorrect={option == currentQuestion.answer}
                        /> :
                        <CorrectAnswer
                            option={option}
                            currentQuestion={currentQuestion}
                            setQuestionTimerDuration={setQuestionTimerDuration} // used to create a new timer
                            currentQuestionIndex={currentQuestionIndex}
                            setCurrentQuestionIndex={setCurrentQuestionIndex}
                            timerkey={timerKey}
                            setTimerKey={setTimerKey}
                            nextQuestion={nextQuestion}
                            isCorrect={option == currentQuestion.answer}
                        />
                        
                        )
                    ); 
                })}
            </> 
            }
        </div>
    )
}
export default QuestionLayout;