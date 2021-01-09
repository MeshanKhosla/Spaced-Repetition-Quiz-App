import { React } from "react";
import PriorityQueue from "js-priority-queue";
import TimerLayout from "./TimerLayout";
import QuestionLayout from "./QuestionLayout";
import { useSelector } from "react-redux";
import ResultsPage from './ResultsPage';


const QuizLayout = (props) => {
    const {
        questionData,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        questionTimerDuration,
        quizTimerDuration,
        setQuestionTimerDuration,
        timerKey,
        setTimerKey,
    } = props;


    let showResultsPage = useSelector(state => state.showResultsPage)
    
    let currentQuestion = questionData[currentQuestionIndex % questionData.length]; // Modulus to prevent out of bounds error
    let nextQuestion = questionData[(currentQuestionIndex + 1) % questionData.length]; 

    let priorityQueue = new PriorityQueue({
        initialValues: questionData,
        comparator: (a, b) => a.points - b.points,
    });
    let pqCurQuestion = priorityQueue.dequeue(); // Need to deque to see next question
    let pqNextQuestion = priorityQueue.peek();
    priorityQueue.queue(pqCurQuestion)

    // let priorityQueue = [...questionData];
    // priorityQueue.sort((a, b) => a.points - b.points)
    // let pqCurQuestion = priorityQueue[0]
    // let pqNextQuestion = priorityQueue[1]
    
    if (!showResultsPage) {
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

            {/* Calibration Questions */}
            {currentQuestionIndex < questionData.length ? 
                <QuestionLayout 
                    currentQuestion={currentQuestion}
                    setQuestionTimerDuration={setQuestionTimerDuration}
                    currentQuestionIndex={currentQuestionIndex}
                    setCurrentQuestionIndex={setCurrentQuestionIndex}
                    timerkey={timerKey}
                    setTimerKey={setTimerKey}
                    nextQuestion={nextQuestion}
                /> : 
                // Questions from PQ 
                <QuestionLayout 
                    currentQuestion={pqCurQuestion}
                    setQuestionTimerDuration={setQuestionTimerDuration} // used to create a new timer
                    currentQuestionIndex={currentQuestionIndex}
                    setCurrentQuestionIndex={setCurrentQuestionIndex}
                    timerkey={timerKey}
                    setTimerKey={setTimerKey}
                    nextQuestion={pqNextQuestion}
                />
            }
        </>
        )
    } else {
        return <ResultsPage />
    }
};
export default QuizLayout;
