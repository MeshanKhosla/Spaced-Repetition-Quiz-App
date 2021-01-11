import { React, useState } from "react";
import QuizLayout from "../components/QuizLayout";
import Question from "../components/Question";
import { Link } from "react-router-dom";

/**
 * Page that determines whether the questions are valid.
 * If there are at least 2 questions, render the QuizLayout.
 * If not, Alert user that they need a minimum of 2 questions.
 */
const Quiz = () => {
    const [questionData] = useState(getData()); // Dont need setter
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questionTimerDuration, setQuestionTimerDuration] = useState(new Question().INITIAL_TIME);
    const [timerKey, setTimerKey] = useState(0);
    // let questionData = getData();
    
    return (
        <>
            {questionData.length > 1 ? (
                <div className="quiz-layout">
                    <QuizLayout
                        questionData={questionData}
                        currentQuestionIndex={currentQuestionIndex}
                        setCurrentQuestionIndex={setCurrentQuestionIndex}
                        questionTimerDuration={questionTimerDuration}
                        setQuestionTimerDuration={setQuestionTimerDuration}
                        timerKey={timerKey}
                        setTimerKey={setTimerKey}
                    />
                </div>
            ) : (
                <div className="add-questions-alert-container">
                    <div className="add-questions-alert">
                        <h1>Please enter a minimum of 2 questions.</h1>
                        <button>
                            <Link to="/add">Add Questions</Link>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

/**
 * Gets question data from localstorage.
 * Creates a Question Object out of each question.
 * Randomizes question order and options.
 */
const getData = () => {
    let questions = [];
    let rawQuestionData = JSON.parse(localStorage.getItem("questionStore")) || [];
    rawQuestionData.forEach((q) => {
        randomizeArrOrder(q.options);
        questions.push(new Question(q.text, q.options, q.answer));
    });
    
    // randomizeArrOrder(questions);
    return questions;
};

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

export default Quiz;
