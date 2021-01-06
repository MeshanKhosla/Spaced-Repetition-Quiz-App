import { React } from 'react';
import { useSelector } from 'react-redux';
import QuestionOption from './QuestionOption'

const QuizLayout = () => {
    let data = getData();
    let currentQuestion = useSelector(state => state.currentQuestion);

    return (
        <>
            {/* Initial questions */}
            {currentQuestion < data.length ? 
                <div>
                    <h1>{data[currentQuestion].text}</h1>
                    {data[currentQuestion].options.map((option) => {
                        return (
                            <QuestionOption 
                                option={option} 
                                currQuestionObj={ [data[currentQuestion]] }
                                nextQuestionObj={
                                    (currentQuestion < data.length) ?
                                    [data[currentQuestion]] : [-1]
                                }
                            />
                        )
                    })}
                </div>
            : ''}
            
            {/* This is where I'm going to put the Priority Queue part */}
        </>
    )
}

class Question {
    STARTING_POINTS = 100;
    INITIAL_TIME = 20;
    constructor(text, options, answer) {
        this.text = text;
        this.options = options;
        this.answer = answer;
        this.points = this.STARTING_POINTS;
        this.timeAllowed = this.INITIAL_TIME;
    }
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


export default QuizLayout;