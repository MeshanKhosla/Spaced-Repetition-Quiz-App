import { React, useState, useContext } from 'react'
import { DataContext } from './DataProvider';
import { useAlert } from 'react-alert';

/**
 * Component that creates Question input.
 * Ensures there are no duplicate questions.
 * Updates question array in data provider with new question.
 */
const FormInput = () => {
    const [questions, setQuestions] = useContext(DataContext);
    const [questionText, setQuestionText] = useState('');
    const alert = useAlert();

    const addQuestion = e => {
        let validQuestion = true;
        questions.forEach(q => {
            if (q.text === questionText) {
                validQuestion = false;
            }
        })
        e.preventDefault();

        if (!validQuestion) { 
            alert.error(<div style={{ textTransform: 'initial' }}>
                Questions must be different
            </div>);
            setQuestionText('');
            return;
        }
        setQuestions([...questions, {
            text: questionText,
            complete: false, 
            options: [],
            answer: "",
        }])
        setQuestionText('');
    }

    return (
        <form autoComplete="off" onSubmit={addQuestion}>
                <input
                    type="text"
                    name="questions"
                    id="questions"
                    required
                    placeholder="Enter questions"
                    value={questionText}
                    onChange={e => setQuestionText(e.target.value)}
                />
            <button type="submit">Add</button>
        </form>
    )
}


export default FormInput
