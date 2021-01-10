import { React, useState } from "react";
import QuizLayout from "../components/QuizLayout";
import Question from "../components/Question";
import { Link } from "react-router-dom";
import { setQuizTimer } from '../actions';
import { store } from '../index';


const Quiz = () => {
    const [questionData, setQuestionData] = useState(getData());
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questionTimerDuration, setQuestionTimerDuration] = useState(new Question().INITIAL_TIME);
    const [timerKey, setTimerKey] = useState(0);

    store.dispatch(setQuizTimer(parseInt(localStorage.getItem("Quiz length"))))
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

const randomizeArrOrder = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
};

const getData = () => {
    let questions = [];
    let rawQuestionData = JSON.parse(localStorage.getItem("questionStore"));
    rawQuestionData.forEach((q) => {
        randomizeArrOrder(q.options);
        questions.push(new Question(q.text, q.options, q.answer));
    });

    // randomizeArrOrder(questions);
    return questions;
};

export default Quiz;
