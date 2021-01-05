import { React, useState } from 'react';
// import Question from './Question';
import { useSelector, useDispatch } from 'react-redux';
import QuestionOption from './QuestionOption'
// import { updateCurrQuestionTime } from '../actions'

const QuizLayout = () => {
    let data = getData();

    // const dispatch = useDispatch()
    let currentQuestion = useSelector(state => state.currentQuestion);
    currentQuestion = currentQuestion % data.length;
    return (
        <>
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
                                    [data[(currentQuestion + 1) % data.length]] : [-1]
                                }
                            />
                        )
                    })}
                </div>
            : ''}
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