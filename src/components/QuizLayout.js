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
        setQuestionTimerDuration,
        timerKey,
        setTimerKey,
    } = props;

    let showResultsPage = useSelector(state => state.showResultsPage)

    let currentQuestion = questionData[currentQuestionIndex % questionData.length]; // Modulus to prevent out of bounds error
    let nextQuestion = questionData[(currentQuestionIndex + 1) % questionData.length]; 
    
    let pqCurQuestion = currentQuestion;
    let pqNextQuestion = nextQuestion;

    // Whether or not we should be using PQ based ordering
    let isPqOrdering = useSelector(state => state.pqOrder)
    if (isPqOrdering) {
        let priorityQueue = new PriorityQueue({
            initialValues: questionData,
            comparator: (a, b) => a.points - b.points,
        });
        pqCurQuestion = priorityQueue.dequeue();
        pqNextQuestion = priorityQueue.peek();
        priorityQueue.queue(pqCurQuestion)
    }

    // console.log(pqNextQuestion.timeAllowed)
    // console.log(pqCurQuestion.timeAllowed)
    

    // let priorityQueue = [...questionData];
    // priorityQueue.sort((a, b) => a.points - b.points)
    // let pqCurQuestion = priorityQueue[0]
    // let pqNextQuestion = priorityQueue[0];
    
    if (!showResultsPage) {
        return (
        <>
            <TimerLayout
                questionTimerDuration={questionTimerDuration}
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
                /> 
                : 
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
