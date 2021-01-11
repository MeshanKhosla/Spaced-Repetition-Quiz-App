import { React, useContext, useState } from 'react'
import { DataContext } from './DataProvider'
import { Modal, Switch } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help'
import { Link } from "react-router-dom";
import { store } from '../index'
import { toggleUsePqOrder } from '../actions'
import { useSelector } from 'react-redux';
import { useAlert } from 'react-alert';

/**
 * Component that handles logic for deletion, toggle, and quiz length.
 * Stores quiz length in localstorage.
 * Stores PQ toggle in Redux.
 */
const QuestionListFooter = () => {
    const [checkAll, setCheckAll] = useState(false);
    const [questions, setQuestions] = useContext(DataContext);
    const [showHelpModal, setShowHelpModal] = useState(false);
    const usePqOrder = useSelector(state => state.pqOrder);
    const alert = useAlert();

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
        alert.success(<div style={{ textTransform: 'initial' }}>
            Quiz length updated to {length} seconds!
        </div>);
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

    const handleToggleUsePQ = () => {
        store.dispatch(toggleUsePqOrder(!usePqOrder))
    }


    const handleOpenHelpModal = () => {
        setShowHelpModal(true)
    }

    const handleCloseHelpModal = () => {
        setShowHelpModal(false)
    }

    const modalText = (
        <div className="help-modal">
            <p id="modal-description">
                Untoggle this if you want all questions to remain in the same order.
                The time alloted per question will still change depending on the 
                algorithm described <Link to="/info">here.</Link>
            </p>
        </div>
    )

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
            <div className="quizlength-container">
                <label>Use Priority Queue Ordering</label>
                <Switch checked={usePqOrder} color='primary' onClick={handleToggleUsePQ} />
                <button className="modal-btn" onClick={handleOpenHelpModal}><HelpIcon /></button>
            </div>

                <Modal
                    className="pq-modal"
                    open={showHelpModal}
                    onClose={handleCloseHelpModal}>
                    {modalText}
                </Modal>
        </>
    )
}

export default QuestionListFooter
