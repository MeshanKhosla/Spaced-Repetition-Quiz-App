import { React, useState, useEffect, createContext } from "react";

/**
 * Context API data provider for adding questions.
 * Could have used Redux but Redux doesn't like arrays of objects.
 */
export const DataContext = createContext();
export const DataProvider = (props) => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const questionStore = JSON.parse(localStorage.getItem("questionStore"));
        if (questionStore) {
            setQuestions(questionStore);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("questionStore", JSON.stringify(questions));
    }, [questions]);

    return (
        <DataContext.Provider value={[questions, setQuestions]}>
            {props.children}
        </DataContext.Provider>
    );
};
