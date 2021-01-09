import { React, useState, useContext } from 'react'
import { DataContext } from './DataProvider'

const FormInput = () => {
    const [questions, setQuestions] = useContext(DataContext);
    const [questionText, setQuestionText] = useState('');

    const addQuestion = e => {
        let validQuestion = true;
        questions.forEach(q => {
            if (q.text == questionText) {
                validQuestion = false;
            }
        })
        if (!validQuestion) { alert("Questions must be different"); return }
        e.preventDefault();
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
