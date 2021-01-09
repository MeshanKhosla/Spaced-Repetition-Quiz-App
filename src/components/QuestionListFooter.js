import { React, useContext, useState } from 'react'
import { DataContext } from './DataProvider'

const QuestionListFooter = () => {
    const [checkAll, setCheckAll] = useState(false)
    const [questions, setQuestions] = useContext(DataContext)
    
    const handleCheckAll = () => {
        const newQuestions = [...questions] 
        newQuestions.forEach(question => {
            question.complete = !checkAll
        })
        setQuestions(newQuestions)
        setCheckAll(!checkAll)
    }

    const handleQuizLength = e => {
        let length = Math.abs(e.target.value)
        localStorage.setItem("Quiz length", length)
        // store.dispatch(updateQuizLength(length))        
    }

    const deleteQuestion = () => {
        const newQuestions = questions.filter(question => {
            return question.complete === false;
        })
        setQuestions(newQuestions)
        setCheckAll(false)
    }
    const styles = { 
        transform: `translate(${-20}px, ${0}px)` 
    };
    
    return (
        <>
            <div className="row">
                <label htmlFor="all">
                    <input type="checkbox" name="all" id="all" onClick={handleCheckAll}/>
                    Toggle All
                </label>
                <p style={styles}>{questions.length} {questions.length !== 1 ? 'questions' : 'question'}</p>
                <button id="delete" onClick={deleteQuestion}>Delete</button>
            </div>
            <div className="quizlength-container">
                <input 
                    className="quizlength-input" 
                    type="number" 
                    name="quizLength" 
                    id="quizLength" 
                    placeholder="Enter Quiz Length (in seconds)" 
                    min="1"
                    onChange={handleQuizLength}
                />
            </div>
        </>
    )
}

export default QuestionListFooter
