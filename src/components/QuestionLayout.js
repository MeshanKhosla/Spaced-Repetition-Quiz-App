import React from 'react';
import QuestionOption from './QuestionOption';
import CorrectAnswer from './CorrectAnswer';

/**
 * Component that maps over question options.
 * If the option is incorrect, renders QuestionOption.
 * If the option is correct, renders CorrectOption.
 * Need to be different components in order to always change
   correct answer background to green.
 * Randomizes the options and alerts alerts if question has no options.
 */
const QuestionLayout = props => {
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
                        /> :
                        <CorrectAnswer
                            option={option}
                            currentQuestion={currentQuestion}
                            setQuestionTimerDuration={setQuestionTimerDuration} // used to create a new timer
                            currentQuestionIndex={currentQuestionIndex}
                            setCurrentQuestionIndex={setCurrentQuestionIndex}
                            setTimerKey={setTimerKey}
                            nextQuestion={nextQuestion}
                        />
                        )
                    ); 
                })}
            </> 
            }
        </div>
    )
}

/**
 * Implementation of the Durstenfeld shuffle
 * @param {array} array 
 */
const randomizeArrOrder = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};
export default QuestionLayout;