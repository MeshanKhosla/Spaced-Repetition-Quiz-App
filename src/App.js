import { React } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar';
import AddQuestions from './pages/AddQuestions'
import Quiz from './pages/Quiz'
import Info from './pages/Info';
import './App.css';
/* 
    ugghghh
        Timer is not updating based on the current question
        Questions are being repeated and nextQuestion is using the previous
            question.
        Change margin top of quiz-layout based on the number of options
        Make it so questions with no options are not marked wrong
            redux state: noOptions
            If it's true, call incorrectAnswer

    Cleanup:
    * real timerKey
    * Move state to redux
    * change function signature from ({prop1, prop2...}) 
        to {prop1, prop2...} = props outside of signature
    * Javadocs
*/
function App() {
    
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Route path="/" exact component={Quiz}/>
                <Route path="/add" component={AddQuestions}/>
                <Route path="/info" component={Info}/>
            </div>
        </Router>
    );
}

export default App;
