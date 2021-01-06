import { React } from 'react';
import QuestionOption from './QuestionOption'
import TimerLayout from './TimerLayout';

const QuizLayout = ({
        questionData, 
        setQuestionData, 
        currentQuestionIndex,
        setCurrentQuestionIndex,
        questionTimerDuration, 
        quizTimerDuration,
        setQuestionTimerDuration,
        timerKey,
        setTimerKey
    }) => {
    // let data = getData();
    // let currentQuestion = useSelector(state => state.currentQuestion);
    let currentQuestion = questionData[currentQuestionIndex];
    currentQuestion = questionData[(currentQuestionIndex) % questionData.length]; // will delete later
    const nextQuestion = questionData[(currentQuestionIndex + 1) % questionData.length]
    return (
        <>
            <TimerLayout 
                questionTimerDuration={questionTimerDuration}
                quizTimerDuration={quizTimerDuration}
                timerKey={timerKey}
                currentQuestion={currentQuestion}
                setCurrentQuestionIndex={setCurrentQuestionIndex}
                setTimerKey={setTimerKey}
                setQuestionTimerDuration={setQuestionTimerDuration}
                currentQuestionIndex={currentQuestionIndex}
                nextQuestion={nextQuestion}
            />
            
            {/* {currentQuestionIndex < questionData.length ?  */}
                <div>
                    <h1>{currentQuestion.text}</h1>
                    {currentQuestion.options.map((option) => {
                        return (
                            
                            <QuestionOption 
                                option={option}
                                questionData={questionData}
                                setQuestionData={setQuestionData} // to change timeAllowed
                                currentQuestion={currentQuestion}
                                setQuestionTimerDuration={setQuestionTimerDuration} // used to create a new timer
                                currentQuestionIndex={currentQuestionIndex}
                                setCurrentQuestionIndex={setCurrentQuestionIndex}
                                timerkey={timerKey}
                                setTimerKey={setTimerKey}
                                nextQuestion={nextQuestion}
                            />
                        )
                    })}
                </div>
            {/* : ''} */}
            
            {/* This is where I'm going to put the Priority Queue part */}
        </>
    )
}

// class Question {
//     STARTING_POINTS = 100;
//     INITIAL_TIME = 20;
//     constructor(text, options, answer) {
//         this.text = text;
//         this.options = options;
//         this.answer = answer;
//         this.points = this.STARTING_POINTS;
//         this.timeAllowed = this.INITIAL_TIME;
//     }
// }
// const getData = () => {
//     let questions = [
//         new Question("Question 1", ["a", "b"], "a"),
//         new Question("Question 2", ["a", "b"], "a"),
//         new Question("Question 3", ["a", "b"], "b"),
//         new Question("Question 4", ["a", "b"], "b"),
//     ];
//     return questions;
// }


export default QuizLayout;