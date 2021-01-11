import { React } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar';
import AddQuestions from './pages/AddQuestions'
import Quiz from './pages/Quiz'
import Info from './pages/Info';
import './App.css';

const App = () => {
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
