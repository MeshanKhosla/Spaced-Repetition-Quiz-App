import React from 'react';
import { useSelector } from 'react-redux';
import QuizLayout from './components/QuizLayout';
import Timer from './components/Timer';
import './App.css';

function App() {
    // This is how we get access to the state form the store.  
    // Get names from reducers/index.js
    // const counter = useSelector(state => state.counter);
    const questionTimer = useSelector(state => state.timer);

    // dispatch takes in an object (from the function) it passes that into
    // the designated reducer function which updates the state
    return (
        <div className="App">
            {/* <h1>Counter {counter}</h1>
            <button onClick={() => dispatch(increment(5))}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(login())}>Login</button>
            {isLogged ? <h3>Only for logged in users</h3> : ''} */}
            <div className='timers'>
                {questionTimer}
                <Timer duration={180} />
            </div>
            <QuizLayout />

        </div>
    );
}



export default App;
