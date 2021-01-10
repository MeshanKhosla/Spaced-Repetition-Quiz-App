import React from 'react';
import QuestionOption from './QuestionOption';
import CorrectAnswer from './CorrectAnswer';


const QuestionLayout = (props) => {
    const {
        currentQuestionIndex,
        currentQuestion,
        setCurrentQuestionIndex,
        setQuestionTimerDuration,
        setTimerKey,
        nextQuestion,
    } = props;
    
    randomizeArrOrder(currentQuestion.options)
    return (
        <div className="question">
            <h1>{currentQuestion.text}</h1>
            {currentQuestion.options.length == 0 ? <h3>This question has no options</h3> : 
            <>
                {currentQuestion.options.map(option => {
                    return (
                        (option !== currentQuestion.answer ?
                        <QuestionOption
                            option={option}
                            currentQuestion={currentQuestion}
                            setQuestionTimerDuration={setQuestionTimerDuration} // used to create a new timer
                            currentQuestionIndex={currentQuestionIndex}
                            setCurrentQuestionIndex={setCurrentQuestionIndex}
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

const randomizeArrOrder = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
};
export default QuestionLayout;