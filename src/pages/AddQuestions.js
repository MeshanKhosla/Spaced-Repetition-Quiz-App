import React from "react";
import FormInput from '../components/FormInput';
import QuestionList from '../components/QuestionList';
import QuestionListFooter from "../components/QuestionListFooter";
import { DataProvider } from '../components/DataProvider';

/**
 * Page that allows user to add questions.
 */
const AddQuestions = () => {
    return (
        <DataProvider>
            <div className="add-questions-container">
                <div className="add-questions">
                    <FormInput />
                    <QuestionList />
                    <QuestionListFooter />

                </div> 
            </div>
        </DataProvider>
    );
};

export default AddQuestions;
