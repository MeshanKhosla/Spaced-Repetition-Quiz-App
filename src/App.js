import { React, useState} from 'react';
import QuizLayout from './components/QuizLayout';
import Timer from './components/Timer';
import Question from './components/Question'
import './App.css';
/* 
    Cleanup:
    * Never used setQuestionData
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
            <div className='timers'>
                {/* Question timer */}
                <Timer 
                    duration={questionTimerDuration} 
                    key={timerKey} 
                    isQuestionTimer={true}
                /> 
                {/* Quiz timer */}
                <Timer 
                    duration={quizTimerDuration} 
                    isQuestionTimer={false}
                /> 
            </div>

            <QuizLayout 
                questionData={questionData}
                setQuestionData={setQuestionData}
                currentQuestionIndex={currentQuestionIndex}
                setCurrentQuestionIndex={setCurrentQuestionIndex}
                questionTimerDuration={questionTimerDuration}
                setQuestionTimerDuration={setQuestionTimerDuration}
                timerKey={timerKey}
                setTimerKey={setTimerKey}
            />
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
    return questions;
}

export default App;
