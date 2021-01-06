import React from 'react';
import { useSelector } from 'react-redux';
import QuizLayout from './components/QuizLayout';
import Timer from './components/Timer';
import './App.css';

function App() {
    const questionTimer = useSelector(state => state.timer);

    return (
        <div className="App">
            <div className='timers'>
                {questionTimer}
                <Timer duration={180} /> {/* Quiz timer */}
            </div>
            <QuizLayout />
        </div>
    );
}



export default App;
