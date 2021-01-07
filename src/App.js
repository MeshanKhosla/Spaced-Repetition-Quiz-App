import { React, useState} from 'react';
import QuizLayout from './components/QuizLayout';
import Question from './components/Question'
import './App.css';
/*
    TODO:
        PQ
        UI to add TODOs
*/
/* 
    Cleanup:
    * real timerKey
    * Move state to redux
    * change function signature from ({prop1, prop2...}) 
        to {prop1, prop2...} = props outside of signature
    * Javadocs
*/
function App() {
    const [questionData, setQuestionData] = useState(getData());
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); 
    const [questionTimerDuration, setQuestionTimerDuration] = useState(new Question().INITIAL_TIME);
    const [quizTimerDuration, setQuizTimerDuration] = useState(180);
    const [timerKey, setTimerKey] = useState(0); 

    return (
        <div className="App">
            <div className="quiz-layout">
                <QuizLayout 
                    questionData={questionData}
                    currentQuestionIndex={currentQuestionIndex}
                    setCurrentQuestionIndex={setCurrentQuestionIndex}
                    questionTimerDuration={questionTimerDuration}
                    setQuestionTimerDuration={setQuestionTimerDuration}
                    timerKey={timerKey}
                    setTimerKey={setTimerKey}
                    quizTimerDuration={quizTimerDuration}
                />
            </div>
        </div>
    );
}

const getData = () => {
    let questions = [
        new Question("Question 1", ["a", "b"], "a"),
        new Question("Question 2", ["a", "b"], "a"),
        new Question("Question 3", ["a", "b"], "b"),
        new Question("Question 4", ["a", "b"], "b"),
    ];

    for(let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = questions[i];
        questions[i] = questions[j];
        questions[j] = temp;
    }
    return questions;
}

export default App;
