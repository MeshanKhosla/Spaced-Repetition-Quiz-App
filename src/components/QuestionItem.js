import { React, useState, useContext } from "react";
import { DataContext } from "./DataProvider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import { useAlert } from 'react-alert';

/**
 * Component that creates all Question items.
 * Takes care of edit logic.
 */
const QuestionItem = ({ question, id, checkComplete, handleEditQuestions }) => {
    const [onEdit, setOnEdit] = useState(false);
    const [editValue, setEditValue] = useState(question.text);
    const [openOptionsBox, setOpenOptionsBox] = useState(false);
    const [optionsValue, setOptionsValue] = useState("");
    const [questions, setQuestions] = useContext(DataContext);
    const alert = useAlert();

    // Options box logic
    const handleOpenOptionsBox = () => {
        setOpenOptionsBox(true);
    };

    const handleCloseOptionsBox = () => {
        let optionsValueArr = optionsValue.split(',')
        optionsValueArr = optionsValueArr.map(el => el.trim()) // Gets rid of whitespace
        let correctAnswer = optionsValueArr[0];

        const newQuestions = [...questions]
        newQuestions.forEach(q => {
            if (q.text === question.text) {
                q.answer = correctAnswer;
                q.options = optionsValueArr
            }
        })
        setQuestions(newQuestions)
        setOpenOptionsBox(false);
        alert.success(<div style={{ textTransform: 'initial' }}>
            Options added!
        </div>);
    };

    const handleOptionsChange = (e) => {
        e.preventDefault();
        setOptionsValue(e.target.value);
    };

    // Edit logic
    const handleOnEdit = () => {
        setOnEdit(true);
    };

    const handleSave = (qId) => {
        setOnEdit(false);
        if (editValue) {
            handleEditQuestions(editValue, qId);
        } else {
            setEditValue(question.text);
        }
    };

    if (onEdit) {
        return (
            <li>
                <input
                    type="text"
                    id="editValue"
                    value={editValue}
                    name="editValue"
                    onChange={(e) => setEditValue(e.target.value)}
                />
                <button className="edit-btn" onClick={() => handleSave(id)}>Save</button>
            </li>
        );
    } else {
        return (
            <>
                <li>
                    <label
                        htmlFor={id}
                        className={question.complete ? "active" : ""}
                    >
                        <input
                            type="checkbox"
                            id={id}
                            checked={question.complete}
                            onChange={() => checkComplete(id)}
                        />
                        {question.text}
                    </label>
                    <div className="adjusting-btns">
                        <button className="options-btn" onClick={handleOpenOptionsBox}>Options</button>
                        <button className="edit-btn" onClick={handleOnEdit}>Edit</button>
                    </div>
                </li>

                {/* Options box modal */}
                <Dialog
                    open={openOptionsBox}
                    onClose={handleCloseOptionsBox}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">
                        Add options to "{question.text}"
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please separate options by commas with the first option being the correct choice
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Options"
                            type="text"
                            fullWidth
                            onChange={handleOptionsChange}
                            placeholder="CorrectOption, IncorrectOption1, IncorrectOption2"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseOptionsBox} color="primary">
                            Add Options
                        </Button>
                    </DialogActions>
                </Dialog>
            </>
        );
    }
};

export default QuestionItem;
