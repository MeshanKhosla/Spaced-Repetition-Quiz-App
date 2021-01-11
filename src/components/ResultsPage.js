import React from 'react';
import { useSelector } from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';

/**
 * Component that creates result page for when quiz timer ends.
 * Displays correct, incorrect amounts.
 * Has an option to restart.
 */
const ResultsPage = ({ questionData }) => {
    let correctAnswerAmt = useSelector((state) => state.correctAnswerAmt);
    let incorrectAnswerAmt = useSelector((state) => state.incorrectAnswerAmt);

    const columns = [
        { field: "question", headerName: "Question", width: '30vw' },
        { field: "correctAmt", headerName: "# Correct", width: '20vw' },
        { field: "incorrectAmt", headerName: "# Incorrect", width: '20vw' }
    ];

    const rows = [];
    let idCounter = 0;
    for (let q of questionData) {
        rows.push({id: idCounter, question: q.text, correctAmt: q.timesCorrect, incorrectAmt: q.timesIncorrect})
        idCounter += 1;
    }

    return (
        <div className="results">
            <h1>Results</h1>
            <h2>You got {correctAnswerAmt} correct</h2>
            <h2>You got {incorrectAnswerAmt} incorrect</h2>

            <div style={{ height: 400, width: '70vw' }}>
                <DataGrid rows={rows} columns={columns} />
            </div>

            <div className="restart-alert-container">
                <div className="restart-alert">
                    <button onClick={handleRestart}>Restart Quiz</button>
                </div>
            </div>
        </div>
    );
};

const handleRestart = () => {
    window.location.reload();
};
export default ResultsPage;
