import { React, useContext } from 'react'
import QuestionItem from './QuestionItem'
import { DataContext } from './DataProvider'

/**
 * Component that displays inputted questions
 */
const QuestionList = () => {
    const [questions, setQuestions] = useContext(DataContext)

    const switchComplete = id => {
        const newQuestions = [...questions]
        newQuestions.forEach((question, index) => {
            if (index === id) {
                question.complete = !question.complete
            }
        })
        setQuestions(newQuestions)
    }

    const handleEditQuestions = (editValue, id) => {
        const newQuestions = [...questions]
        newQuestions.forEach((question, index) => {
            if (index === id) {
                question.text = editValue
            }
        })
        setQuestions(newQuestions)
    }



    return (
        <ul>
            {
                questions.map((question, index) => (
                    <QuestionItem 
                        question={question} 
                        key={index} 
                        id={index} 
                        checkComplete={switchComplete}
                        handleEditQuestions={handleEditQuestions}
                    />
                ))
            }
        </ul>
    )
}

export default QuestionList
