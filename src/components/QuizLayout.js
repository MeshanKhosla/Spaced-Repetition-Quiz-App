import { React } from "react";
import PriorityQueue from "js-priority-queue";
import TimerLayout from "./TimerLayout";
import QuestionLayout from "./QuestionLayout";
import { useSelector } from "react-redux";
import ResultsPage from './ResultsPage';

/**
 * Component that implements Priority Queue logic.
 * Adds timer to screen.
 * Passes current and next questions into QuestionLayout.
 * If quiz timer runs out, show results page
 */
const QuizLayout = props => {
    const {
        questionData,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        questionTimerDuration,
        setQuestionTimerDuration,
        timerKey,
        setTimerKey,
    } = props;

    let showResultsPage = useSelector(state => state.showResultsPage);
    let currentQuestion = questionData[currentQuestionIndex % questionData.length]; // Modulus to prevent out of bounds error
    let nextQuestion = questionData[(currentQuestionIndex + 1) % questionData.length]; 

    // These might be changed depending on toggle
    let pqCurQuestion = currentQuestion;
    let pqNextQuestion = nextQuestion;

    /* Whether or not we should be using PQ based ordering.
       Retrieved from the toggle on Add Questions page */
    let isPqOrdering = useSelector(state => state.pqOrder)
    if (isPqOrdering) {
        let priorityQueue = new PriorityQueue({
            initialValues: questionData,
            comparator: (a, b) => a.points - b.points,
        });
        /* I tried dequeing and then peeking the second option
           but it made things worse. */ 
        pqCurQuestion = priorityQueue.peek();
        pqNextQuestion = priorityQueue.peek();
    }

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
