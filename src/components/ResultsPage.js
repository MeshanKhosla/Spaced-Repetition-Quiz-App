import React from 'react'
import { useSelector } from "react-redux";

/**
 * Component that creates result page for when quiz timer ends.
 * Displays correct, incorrect amounts.
 * Displays Final score.
 * Has an option to restart. 
 */
const ResultsPage = (props) => {
    let correctAnswerAmt = useSelector(state => state.correctAnswerAmt)
    let incorrectAnswerAmt = useSelector(state => state.incorrectAnswerAmt)

    return (
        <div className='results'>
            <h1>Results</h1>
            <h2>You got { correctAnswerAmt } correct</h2>
            <h2>You got { incorrectAnswerAmt} incorrect</h2>
            <div className="restart-alert-container">
                    <div className="restart-alert">
                        <button onClick={handleRestart}>
                            Restart Quiz
                        </button>
                    </div>
                </div>
        </div>
    )
}

const handleRestart = () => {
    window.location.reload();
}
export default ResultsPage;