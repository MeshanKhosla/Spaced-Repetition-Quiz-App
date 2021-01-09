import React from 'react'
import { useSelector } from "react-redux";

const ResultsPage = (props) => {
    let correctAnswerAmt = useSelector(state => state.correctAnswerAmt)
    let incorrectAnswerAmt = useSelector(state => state.incorrectAnswerAmt)

    return (
        <div className='results'>
            <h1>Results</h1>
            <h2>You got { correctAnswerAmt } correct</h2>
            <h2>You got { incorrectAnswerAmt} wrong</h2>
        </div>
    )
}
export default ResultsPage;